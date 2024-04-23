import { Button, buttonVariants } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";

function S1() {
  return (
    <>
      <div className="h-20 w-full " />
      <div className="flex min-h-[calc(100vh-80px)] w-screen flex-col-reverse items-center justify-center gap-10 overflow-hidden px-2.5 py-5 md:px-5 lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center justify-center gap-2.5 md:items-start">
          <span className="text-center text-2xl font-extrabold md:text-left md:text-4xl">
            Ai nevoie de asistență juridică de încredere?
          </span>
          <span className="flex max-w-[650px] text-center text-lg md:text-justify">
            Echipa noastră de avocați specializați este aici pentru tine. Apasă
            acum butonul de contact și lasă-ne să îți oferim soluțiile juridice
            de care ai nevoie!
          </span>
          <Link
            className={`mt-5 ${buttonVariants({ variant: "cta" })}`}
            href={""}
          >
            Contact
          </Link>
        </div>
        <div className="relative aspect-square w-full max-w-[500px]">
          <div className="absolute left-0 top-0 flex aspect-square w-full items-stretch justify-stretch rounded-full p-5 ">
            <div className=" w-full rounded-full bg-brown-400/25"></div>
          </div>
          <div className="absolute left-1/2 top-1/2 -z-50 aspect-square w-3/4 rounded-full bg-brown-700/20 blur-3xl" />
          <div className="absolute bottom-1/2 right-1/2 -z-50 aspect-square w-3/4 rounded-full bg-brown-700/20 blur-3xl" />
          <UserIcon className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 md:size-96" />
        </div>
      </div>
    </>
  );
}

export default S1;
