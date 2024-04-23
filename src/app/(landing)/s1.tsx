import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

function S1() {
  return (
    <>
      <div className="h-20 w-full " />
      <div className="flex min-h-[calc(100vh-80px)] w-full flex-col-reverse items-center justify-center gap-10 bg-green-500/5 lg:flex-row lg:justify-around">
        <div className="flex flex-col items-start justify-center gap-5">
          <span className="text-2xl font-extrabold">
            Ai nevoie de asistență juridică de încredere?
          </span>
          <span className="flex max-w-[470px] text-center text-xl font-semibold md:text-justify">
            Echipa noastră de avocați specializați este aici pentru tine.Apasă
            acum butonul de contact și lasă-ne să îți oferim soluțiile juridice
            de care ai nevoie!
          </span>
          <Button className="mt-5" variant={"cta"}>Contact</Button>
        </div>
        <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-full bg-orange-400/25">
          <UserIcon className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </>
  );
}

export default S1;
