import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function S2() {
  const list: { stat: string; number: number | string }[] = [
    { stat: "Dosare castigate", number: 111 },
    { stat: "Clienti fericiti", number: 222 },
    { stat: "Castig / Pierderi", number: "111 / 123" },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-gradient-to-t from-transparent via-brown-500/15 px-2.5 md:p-5  ">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="text-4xl font-extrabold">Statistici</span>
        <span>Descoperă câteva din realizările noastre</span>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center">
        {/* <div className="h-px w-full bg-gradient-to-r from-black to-white gradient-mask-r-0"></div> */}
        <div className="gradient-mask-r-[transparent,rgba(0,0,0,0.5)_25%,rgba(0,0,0,0.5)_75%] h-px w-full max-w-[1200px] bg-gradient-to-r from-brown-500 via-yellow-500 to-brown-500" />
        {/* <div className="h-px w-full max-w-[1200px] bg-gradient-to-r from-transparent via-brown-600 to-transparent" /> */}
      </div>
      <div className="flex w-full max-w-[1200px] flex-wrap items-stretch justify-center gap-10 ">
        {list.map((e, i) => (
          <div
            key={i}
            className=" flex basis-full items-center justify-center rounded-lg bg-gradient-to-tl from-brown-500 via-yellow-500 to-brown-300 p-0.5 sm:basis-1/2 md:basis-[30%]"
          >
            <div className="h-full w-full rounded-md bg-white">
              <div className="flex h-full w-full items-center justify-center flex-col gap-2.5 bg-brown-500/15 p-5 ">
                <span className="text-xl font-semibold md:text-xl lg:text-2xl">
                  {e.stat}
                </span>
                <span>{e.number}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className={`mt-5 ${buttonVariants({ variant: "cta" })}`} href={""}>
        Contact
      </Link>
    </div>
  );
}

export default S2;
