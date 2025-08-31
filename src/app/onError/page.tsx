'use client'
import styles from '@/app/page.module.css';
import Image from "next/image";

export default function Home() {

    return (
        <Image
            className={styles.image}
            src={''}
            alt="かわいい猫"
            onError={(e) => {
                console.log(e);
            }}
        />
    );
}