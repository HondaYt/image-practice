/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import styles from '@/app/page.module.css';
import sample from "@/assets/sample.png";
import { getImageProps } from "next/image";

const props = getImageProps({
    src: sample,
    alt: "かわいい猫"
})

export default function Home() {
    return (
        <img {...props.props} className={styles.image} />
    );
}
