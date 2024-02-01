import { OLLs } from "@/public/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-10">
      <h1 className="text-2xl font-bold mb-2 ml-2">OLL&rarr;</h1>
      <div className="flex flex-wrap items-center justify-center gap-14">
        {OLLs.map((OLL) => (
          <div
            className="flex flex-col items-center justify-center gap-1"
            key={OLL.id}
          >
            <h2>{OLL.name}</h2>
            <Image src={OLL.image} alt="oll algo" />
            <h2 className="text-primary text-2xl tracking-wide font-bold">
              {OLL.algo}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
