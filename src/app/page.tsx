import Image from "next/image";
import S1 from "./(landing)/s1";
import S2 from "./(landing)/s2";
import S3 from "./(landing)/s3";
import S4 from "./(landing)/s4";
import S5 from "./(landing)/s5";

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center flex-col ">
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
    </main>
  );
}