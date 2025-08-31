import styles from '@/app/page.module.css';
import sample from "@/assets/sample.png";
import Image from "next/image";

export default function Home() {
    return (
        <Image
            className={styles.image}
            style={{ objectFit: 'cover' }}
            src={sample}
            alt="かわいい猫"
            fill
        />
    );
}