import Image from "next/image";

export default function Page() {
    return (
        <>
            <p>↓CUTE↓</p>
            <Image
                src={'/sample.png'}
                width={1024}
                height={1024}
                alt={"かわいい猫"}
            />
            <p>↑CUTE↑</p>
        </>
    )
}