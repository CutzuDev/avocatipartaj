import Image from "next/image";
import S1 from "./(landing)/s1";
import S2 from "./(landing)/s2";

export default function Home() {
  return (
    <main className="px-5 w-full flex justify-center items-center flex-col md:px-5">
      <S1 />
      <S2 />
    </main>
  );
}