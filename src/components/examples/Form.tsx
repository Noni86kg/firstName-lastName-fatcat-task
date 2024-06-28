import clsx from 'clsx';
import {
    FormGenerator,
    InputField,
    TextArea,
    SubmitButton,
} from '@/components';
import { RenderForm } from '@/components/Types';
import { z } from 'zod';

interface Props {
    isEditExample?: boolean;
}

export const Form = ({ isEditExample }: Props) => {
    return (
        <FormGenerator
            defaultValues={
                isEditExample
                    ? undefined
                    : {
                          title: '',
                          body: '',
                      }
            }
            validationSchema={{
                title: z.string().max(15).min(1, { message: 'required field' }),
                body: z.string().max(255).min(1, { message: 'required field' }),
            }}
            successMessage="Successfully created post"
            getDataRequest={
                isEditExample
                    ? 'https://jsonplaceholder.typicode.com/posts/2'
                    : undefined
            }
            postDataRequest={'https://jsonplaceholder.typicode.com/posts'}
            renderForm={({
                register,
                errors,
                isValid,
                isSubmitting,
                isLoading,
                isError,
            }: RenderForm) => {
                return (
                    <div className={clsx('flex', 'flex-col', 'gap-2')}>
                        <InputField
                            {...register('title')}
                            type="text"
                            label="Title"
                            errorText={errors?.title?.message}
                            required
                        />
                        <TextArea
                            {...register('body')}
                            label="Body"
                            errorText={errors?.body?.message}
                            required
                        />
                        <div className={clsx('flex', 'justify-end')}>
                            <SubmitButton
                                disable={!isValid || isSubmitting}
                                value={
                                    isLoading
                                        ? 'Loading...'
                                        : isSubmitting
                                          ? 'Sending'
                                          : isEditExample
                                            ? 'Edit'
                                            : 'Create'
                                }
                            />
                        </div>
                    </div>
                );
            }}
        ></FormGenerator>
    );
};
