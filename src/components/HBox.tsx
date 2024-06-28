import clsx from 'clsx';

interface Props {
    className?: string;
    children?: string | JSX.Element | JSX.Element[];
}

export const HBox = ({ className, children }: Props) => {
    return <div className={clsx('flex', className)}>{children}</div>;
};
