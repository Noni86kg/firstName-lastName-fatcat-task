import React from 'react';
import clsx from 'clsx';
import { omit, isUndefined } from 'lodash';
import { CgAsterisk } from 'react-icons/cg';

interface Props {
    label: string;
    errorText?: string;
    type?: string;
    className?: string;
    id?: string;
    required?: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorText?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        const {
            className,
            type = 'text',
            label,
            errorText,
            id = props.name,
            required,
        } = props as Props;

        const inputProps = omit(props, ['label', 'errorText', 'className']);

        return (
            <div className={clsx('gap-2', 'flex', 'flex-col', className)}>
                <label
                    htmlFor={id}
                    className={clsx(
                        'block',
                        'text-sm',
                        'font-medium',
                        'text-gray-900',
                        'flex'
                    )}
                >
                    {label}
                    {required && (
                        <CgAsterisk className={clsx('text-mainRed')} />
                    )}
                </label>

                <input
                    id={id}
                    {...inputProps}
                    type={type}
                    className={clsx(
                        'border-input',
                        'bg-background',
                        'ring-offset-background',
                        'flex',
                        'h-10',
                        'w-full',
                        'rounded-md',
                        'border',
                        'px-3',
                        'py-2',
                        'text-sm',
                        'focus-visible:outline-none',
                        'focus-visible:ring-2',
                        'focus-visible:ring-offset-2',
                        isUndefined(errorText) ? '' : 'border-mainRed border-2'
                    )}
                    ref={ref}
                />

                <p className="text-mainRed font-bold text-xs h-5">
                    {isUndefined(errorText) ? '' : errorText}
                </p>
            </div>
        );
    }
);

export { InputField };
