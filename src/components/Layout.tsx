import clsx from 'clsx';

interface Props {
    children: string | JSX.Element;
    background?: string;
    className?: string;
}

export const Layout = ({ children, background, className }: Props) => {
    return (
        <section className={clsx('py-20', background, className)}>
            {children}
        </section>
    );
};
