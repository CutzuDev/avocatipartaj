import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

function S1() {
  return (
    <>
      <div className="h-20 w-full " />
      <div className="flex min-h-[calc(100vh-80px)] px-2.5 md:px-5 w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center justify-center gap-5 md:items-start">
          <span className="text-center text-2xl font-extrabold md:text-left">
            Ai nevoie de asistență juridică de încredere?
          </span>
          <span className="flex max-w-[470px] text-center text-xl font-semibold md:text-justify">
            Echipa noastră de avocați specializați este aici pentru tine.Apasă
            acum butonul de contact și lasă-ne să îți oferim soluțiile juridice
            de care ai nevoie!
          </span>
          <Button className="mt-5" variant={"cta"}>
            Contact
          </Button>
        </div>
        <div className="relative aspect-square w-full max-w-[500px]">
          <div className="absolute left-0 top-0 aspect-square w-full rounded-full bg-brown-400/35" />
          <div className="absolute left-1/2 top-1/2 -z-50 aspect-square w-3/4 rounded-full bg-brown-700/25 blur-3xl" />
          <div className="absolute bottom-1/2 right-1/2 -z-50 aspect-square w-3/4 rounded-full bg-brown-700/25 blur-3xl" />
          <UserIcon className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 md:size-96" />
        </div>
      </div>
    </>
  );
}

export default S1;
