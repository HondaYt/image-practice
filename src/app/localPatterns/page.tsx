import styles from '@/app/page.module.css';
import Image from "next/image";

export default function Home() {
  return (
    <Image
      className={styles.image}
      src={'/sample.png'}
      width={1024}
      height={1024}
      alt="かわいい猫"
    />
  );
}