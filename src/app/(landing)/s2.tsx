import { Button } from "@/components/ui/button";

function S2() {
  const list: { stat: string; number: number | string }[] = [
    { stat: "Dosare castigate", number: 111 },
    { stat: "Clienti fericiti", number: 222 },
    { stat: "Castig/Pierderi", number: "99/12" },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-gradient-to-t from-transparent via-brown-500/10  ">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="text-4xl font-extrabold ">Statistici</span>
        <span>Descoperă câteva din realizările noastre</span>
      </div>
      <div className="h-px w-full max-w-[1200px] bg-gradient-to-r from-transparent via-brown-600 to-transparent" />
      <div className="flex w-full max-w-[1200px] flex-wrap items-stretch justify-center gap-10 ">
        {list.map((e) => (
          <div className="flex basis-full flex-col items-center justify-center gap-2.5 rounded-md bg-brown-300 p-5  sm:basis-1/2 md:basis-[30%]">
            <span className="text-xl font-semibold md:text-xl lg:text-2xl">
              {e.stat}
            </span>
            <span>{e.number}</span>
          </div>
        ))}
      </div>
      <Button className="mt-5" variant={"cta"}>
        Contact
      </Button>
    </div>
  );
}

export default S2;
