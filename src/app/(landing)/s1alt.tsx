import { Button, buttonVariants } from "@/components/ui/button";
import { BookIcon, BookOpenText, ScaleIcon } from "lucide-react";
import Link from "next/link";

function S1V2() {
  return (
    <>
      <div className="h-20 w-full " />
      <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-10">
        <div className="relative flex flex-col items-center justify-center gap-10 ">
          <BookOpenText className="absolute -left-24 -top-24 size-24 -rotate-[10deg]" />
          <ScaleIcon className="absolute -bottom-24 -right-24 size-24 rotate-[10deg]" />
          <span className="text-2xl font-black md:text-4xl lg:text-6xl">
            Asistență juridică de încredere
          </span>
          <span className="text-lg font-semibold">
            Lasă-ne să îți oferim ajutorul de care ai nevoie.
          </span>
        </div>
        <Link
          className={`mt-5 ${buttonVariants({ variant: "cta" })}`}
          href={""}
        >
          Contact
        </Link>
      </div>
    </>
  );
}

export default S1V2;
