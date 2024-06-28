import Marquee from 'react-fast-marquee';

interface Props {
    images: string[];
}

export const TrustBar = ({ images }: Props) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};
