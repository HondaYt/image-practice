import sample from "@/assets/sample.png";
import Image from "next/image";

export default function Home() {
  console.log(sample);
  return (
    <Image
      src={sample}
      alt="かわいい猫"
      placeholder="blur"
    />
  );
}