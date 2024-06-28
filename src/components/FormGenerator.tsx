import { useForm, SubmitHandler } from 'react-hook-form';
import { z, ZodRawShape } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { isUndefined } from 'lodash';

interface Props {
    renderForm: Function;
    defaultValues?: { [key: string]: string | number | boolean };
    validationSchema: ZodRawShape;
    getDataRequest?: string;
    postDataRequest: string;
    successMessage?: string;
}

export const FormGenerator = ({
    renderForm,
    defaultValues,
    validationSchema,
    getDataRequest = '',
    postDataRequest,
    successMessage,
}: Props) => {
    /**
     * Define schema based on validationSchema using Zod.
     */
    const schema = z.object(validationSchema);

    /**
     * Define type for form fields based on schema.
     */
    type FormFields = z.infer<typeof schema>;

    /**
     * Handles the GET request to fetch initial form data asynchronously.
     * If successful, returns the response data; otherwise, displays an error alert.
     * @returns {Promise} - Promise resolving to the fetched data or handling errors.
     */
    const handleGetRequest = async () => {
        try {
            const response = await axios.get(getDataRequest);
            return response.data;
        } catch (error) {
            const message = 'Ops! \nSomthing is wrong with getting request';
            alert(message);
            setError('getRequest', {
                message,
            });
        }
    };

    /**
     * Initialize useForm hook from react-hook-form with:
     * - Default values fetched asynchronously if provided.
     * - Resolver set to zodResolver using the defined schema.
     */
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting, isLoading },
        getValues,
        setError,
    } = useForm<FormFields>({
        defaultValues: defaultValues
            ? defaultValues
            : async () => await handleGetRequest(),
        mode: 'all',
        resolver: zodResolver(schema),
    });

    /**
     * Define submit handler function to handle form submission:
     * - Retrieve form data using getValues().
     * - Make a POST request to postDataRequest endpoint with form data.
     * - Show success message if provided, otherwise handle any errors.
     */
    const onSubmit: SubmitHandler<FormFields> = async () => {
        const data = getValues();
        try {
            await axios.post(postDataRequest, { ...data });
            if (!isUndefined(successMessage)) {
                alert(successMessage);
            }
        } catch (error) {
            const message = 'Ops! \nSomthing is wrong with sending request';
            alert(message);
            setError('postRequest', {
                message,
            });
        }
    };

    /**
     * Determine if there are any errors present in the form submission.
     */
    const isError = !isUndefined(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {renderForm({
                register,
                errors,
                onSubmit,
                isValid,
                isSubmitting,
                isLoading,
                isError,
            })}
        </form>
    );
};
