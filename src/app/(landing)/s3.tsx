import { Button, buttonVariants } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";

function S3() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 px-2.5 pt-20  md:gap-10 md:p-5">
      <span className="text-4xl font-extrabold">Echipa noastră</span>
      <div className="h-px w-full max-w-[1200px] bg-gradient-to-r from-brown-500 via-yellow-500 to-brown-500 gradient-mask-r-[transparent,rgba(0,0,0,0.5)_25%,rgba(0,0,0,0.5)_75%]" />
      <div className="flex w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:justify-around">
        <div className="relative aspect-square w-full max-w-[500px]">
          <div className="absolute left-0 top-0 flex aspect-square w-full items-stretch justify-stretch rounded-full p-5 ">
            <div className=" w-full rounded-full bg-brown-400/25"></div>
          </div>
          <div className="absolute right-1/2 top-1/2 -z-50 hidden aspect-square w-3/4 rounded-full bg-brown-700/20 blur-3xl lg:block" />
          <div className="absolute bottom-1/2 left-1/2 -z-50 hidden aspect-square w-3/4 rounded-full bg-brown-700/20 blur-3xl lg:block" />
          <UserIcon className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 md:size-96" />
        </div>
        <div className="flex flex-col items-center justify-center lg:items-end">
          <span className="text-4xl font-extrabold">Nume</span>
          <div className="m-5 max-w-[500px] rounded-lg bg-gradient-to-tr from-brown-500/50 via-transparent to-brown-200  p-0.5">
            <div className="overflow-hidden rounded-md bg-neutral-50 p-2.5">
              <span className=" text-center md:text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae nostrum possimus qui delectus reprehenderit quaerat
                magnam odit facere commodi mollitia, doloribus fugit numquam
                quos quasi similique, natus dignissimos voluptatem eum!
              </span>
            </div>
          </div>
          <Link
            className={`mt-5 ${buttonVariants({ variant: "cta" })}`}
            href={""}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default S3;
