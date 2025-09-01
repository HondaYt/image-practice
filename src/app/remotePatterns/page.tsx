import styles from '@/app/page.module.css';
import Image from "next/image";

export default function Home() {
  return (
    <Image
      className={styles.image}
      src={'https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg5ZDVhMTE0OGQwODE5MWJkYjkxMWFjNzdiNWIzZGM6ZmlsZV8wMDAwMDAwMDZkMjA2MjBhOTc1MDBlZDAwMDBhZjdmMCIsInRzIjoiNDg3NTM5IiwicCI6InB5aSIsInNpZyI6IjJkZGEzZDJhZmU3MDY4NmM0NmZhZjYzMzU2MDUxMTYzMDJkNTUxYjdiOTVmMjBkMTg2ZmJmOTUxZjE3MjJmNTMiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=='}
      width={1024}
      height={1024}
      alt="かわいい猫"
    />
  );
}