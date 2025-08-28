import styles from '@/app/page.module.css';
import sample from "@/assets/sample.png";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Image
                className={styles.image}
                src={sample}
                alt="かわいい猫"
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
            />
            <Image
                className={styles.image}
                src={sample}
                alt="かわいい猫"
                placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
            />
        </div>
    );
}