import clsx from 'clsx';

interface Props {
    children?: string | JSX.Element;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button = ({
    children,
    onClick,
    className,
    type = 'button',
    disabled,
}: Props) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                disabled ? 'bg-gray80' : '',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
