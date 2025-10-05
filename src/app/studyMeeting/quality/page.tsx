import sample from "@/assets/sample.png";
import Image from "next/image";
import styles from './page.module.css';

export default function Page() {
    return (
        <Image
            className={styles.image}
            src={sample}
            alt='かわいい猫'
            sizes="(max-width: 768px) 100vw, 400px"
            quality={50}
        />
    );
}