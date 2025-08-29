/* eslint-disable @next/next/no-img-element */
import styles from '@/app/page.module.css';

export default function Home() {
    return (
        <>
            <p>↓CUTE↓</p>
            <img
                className={styles.image}
                src={'/sample.png'}
                alt="かわいい猫"
                decoding='sync'
            />
            <p>↑CUTE↑</p>
        </>
    );
}