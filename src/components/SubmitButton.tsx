import clsx from 'clsx';

interface Props {
    value?: string;
    className?: string;
    disable?: boolean;
}

export const SubmitButton = ({ value, className, disable }: Props) => {
    return (
        <input
            type="submit"
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                disable ? 'bg-gray80' : 'hover:cursor-pointer',
                className
            )}
            value={value}
        />
    );
};
