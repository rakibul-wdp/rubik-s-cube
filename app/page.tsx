import { OLLs, PLLs } from "@/public/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="my-10">
      <h1 className="text-2xl font-bold mb-2 ml-2">OLL&rarr;</h1>
      <div className="flex flex-wrap items-center justify-center gap-14">
        {OLLs.map((OLL) => (
          <div
            className="flex flex-col items-center justify-center gap-1"
            key={OLL.id}
          >
            <h2>{OLL.name}</h2>
            <Image
              src={OLL.image}
              alt="oll algo"
              className={`${(OLL.id === 4 || OLL.id === 10) && "rotate-180"}`}
            />
            <h2 className="text-primary text-2xl tracking-wide font-bold">
              {OLL.algo}
            </h2>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mt-5 mb-2 ml-2">OLL&rarr;</h1>
      <div className="flex flex-wrap items-center justify-center gap-14">
        {PLLs.map((PLL) => (
          <div
            className="flex flex-col items-center justify-center gap-1"
            key={PLL.id}
          >
            <h2>{PLL.name}</h2>
            <Image
              src={PLL.image}
              alt="oll algo"
              className={`${
                (PLL.id === 5 || PLL.id === 18 || PLL.id == 20) && "rotate-90"
              } ${(PLL.id === 6 || PLL.id == 21) && "rotate-180"} ${
                PLL.id === 9 && "-rotate-90"
              }`}
            />
            <h2 className="text-primary text-2xl tracking-wide font-bold w-60">
              {PLL.algo}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
