import clsx from 'clsx';
import { Button } from './Button.js';

interface Props {
    cards: {
        title: string;
        image: string;
        description: string;
        background: string;
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
        buttonText: string;
    }[];
}

export const Cards = ({ cards }: Props) => {
    return (
        <div className={clsx('flex', 'justify-center', 'items-center')}>
            <div className={clsx('grid', 'grid-cols-2', 'gap-8', 'w-8/12')}>
                {cards.map(
                    ({
                        title,
                        image,
                        description,
                        background,
                        onClick,
                        buttonText,
                    }) => (
                        <div
                            key={title}
                            className={clsx('rounded-md', 'p-8', background)}
                        >
                            <img src={image} alt="Icon" width="120" />
                            <div className="my-8">
                                <div
                                    className={clsx(
                                        'text-2xl',
                                        'font-bold',
                                        'mb-2'
                                    )}
                                >
                                    {title}
                                </div>
                                <div className={clsx('text-xl')}>
                                    {description}
                                </div>
                            </div>
                            <Button onClick={onClick}>{buttonText}</Button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};