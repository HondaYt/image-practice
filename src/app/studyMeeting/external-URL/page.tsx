import styles from '@/app/page.module.css';
import Image from "next/image";

export default function Home() {
    return (
        <Image
            className={styles.image}
            src={'https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjg5ZDVhMTE0OGQwODE5MWJkYjkxMWFjNzdiNWIzZGM6ZmlsZV8wMDAwMDAwMDZkMjA2MjBhOTc1MDBlZDAwMDBhZjdmMCIsInRzIjoiNDg4MjA4IiwicCI6InB5aSIsImNpZCI6IjEiLCJzaWciOiI4MTA0YTQyODZhMGFiYWRjZjFjYjE5NTcwMGVkMzRkYzc3ZTliODJhMDU1ZGNkM2VlYmJlYTJmNTJjYThkODQzIiwidiI6IjAiLCJnaXptb19pZCI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ=='}
            width={1024}
            height={1024}
            alt="かわいい猫"
        />
    );
}