import clsx from 'clsx';
import { Form } from '@/components/examples';

export const FormExample = () => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'gap-2',
                'items-center',
                'bg-cream',
                'text-center',
                'p-2',
                'lg:p-10'
            )}
        >
            <h2
                className={clsx(
                    'leading-normal',
                    'text-3xl',
                    'xl:text-4xl',
                    'xl:leading-normal',
                    'text-black'
                )}
            >
                Form Example
            </h2>
            <div
                className={clsx(
                    'flex',
                    'gap-10',
                    'py-10',
                    'flex-col',
                    'sm:flex-row'
                )}
            >
                <Form />
                <div className={clsx('w-px', 'bg-black')} />
                <Form isEditExample />
            </div>
        </div>
    );
};
