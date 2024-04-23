import { Button, buttonVariants } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";

function S5() {
  return (
    <div className="flex min-h-screen w-full flex-col-reverse items-center justify-center gap-10 px-2.5 md:p-5 lg:flex-row lg:justify-around">
      <div className="relative aspect-square w-full max-w-[500px]">
        <div className="absolute left-0 top-0 flex aspect-square w-full items-stretch justify-stretch rounded-full p-5 ">
          <div className=" w-full rounded-full bg-brown-400/25"></div>
        </div>
        <div className="absolute right-1/2 top-1/2 -z-50 aspect-square w-3/4 rounded-full bg-brown-700/20 blur-3xl" />
        <div className="absolute bottom-1/2 left-1/2 -z-50 aspect-square w-3/4 rounded-full bg-brown-700/20 blur-3xl" />
        <UserIcon className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 md:size-96" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="text-2xl text-center font-extrabold md:text-4xl">
          Primul consult este oferit <span className="bg-gradient-to-br from-yellow-400 to-brown-300 bg-clip-text text-transparent">gratuit</span>.
        </span>
        <span className=" text-center md:text-justify font-semibold">
          Te invităm să ne contactezi acum pentru a găsi soluția potrivită
          pentru nevoile tale.
        </span>
        <Link
          className={`mt-10 ${buttonVariants({ variant: "cta" })}`}
          href={""}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default S5;
