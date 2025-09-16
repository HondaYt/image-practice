import Image from "next/image";

export default function Page() {
    return (
        <>
            <p>↓CUTE↓</p>
            <div style={{ width: '400px', height: '300px', position: 'relative' }}>
                <Image
                    src={'https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjg5ZDVhMTE0OGQwODE5MWJkYjkxMWFjNzdiNWIzZGM6ZmlsZV8wMDAwMDAwMDZkMjA2MjBhOTc1MDBlZDAwMDBhZjdmMCIsInRzIjoiNDg4MjA4IiwicCI6InB5aSIsImNpZCI6IjEiLCJzaWciOiI4MTA0YTQyODZhMGFiYWRjZjFjYjE5NTcwMGVkMzRkYzc3ZTliODJhMDU1ZGNkM2VlYmJlYTJmNTJjYThkODQzIiwidiI6IjAiLCJnaXptb19pZCI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ=='}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={"かわいい猫"}
                />
            </div>
            <p>↑CUTE↑</p>
        </>
    )
}