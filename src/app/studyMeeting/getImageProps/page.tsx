import sample from "@/assets/sample.png";
import sample_mono from "@/assets/sample_mono.png";
import { getImageProps } from 'next/image';

export default function Home() {
    const common = { alt: 'かわいい猫', sizes: '400px' }
    const {
        props: { srcSet: desktop },
    } = getImageProps({
        ...common,
        src: sample
    })
    const {
        props: { srcSet: mobile, ...rest },
    } = getImageProps({
        ...common,
        src: sample_mono
    })

    console.log(getImageProps({
        ...common,
        src: sample
    }));


    return (
        <picture>
            <source media="(min-width: 1000px)" srcSet={desktop} />
            <source media="(min-width: 500px)" srcSet={mobile} />
            <img {...rest} style={{ width: '400px', height: 'auto' }} />
        </picture>
    )
}