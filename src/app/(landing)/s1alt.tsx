import { Button, buttonVariants } from "@/components/ui/button";
import { BookIcon, BookOpenText, ScaleIcon } from "lucide-react";
import Link from "next/link";

function S1V2() {
  return (
    <>
      <div className="h-20 w-full " />
      <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-10">
        <div className="relative flex flex-col items-center justify-center gap-5 md:gap-10 ">
          <BookOpenText className="absolute hidden lg:flex -left-24 -top-24 size-24 -rotate-[10deg]" />
          <ScaleIcon className="absolute hidden lg:flex -bottom-24 -right-24 size-24 rotate-[10deg]" />
          <span className="font-black text-4xl text-center md:text-6xl">
            Asistență juridică de încredere
          </span>
          <span className="text-lg text-center font-semibold">
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
