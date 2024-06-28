import clsx from 'clsx';

interface Props {
    className?: string;
    children?: string | JSX.Element | JSX.Element[];
}

export const VBox = ({ className, children }: Props) => {
    return (
        <div className={clsx('flex', 'flex-col', className)}>{children}</div>
    );
};
