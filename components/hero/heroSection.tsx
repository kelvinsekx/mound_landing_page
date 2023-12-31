import Image from "next/image";
import { WaitListButton } from "../button/button";

export const HeroSection = () => (
  <div className="flex flex-col md:flex-row font-normal bg-moundUpGreen__light max-w-[100rem] mx-auto">
    <section className="self-center  w-[90%] md:w-1/2 text-xl py-30 md:pl-10 lg:pl-30">
      <p className="text-sm md:text-xl text-center font-semibold leading-[174%] md:font-normal md:text-left md:text-xl md:leading-[164%]">
        THE FUTURE OF STARTUPS IN AFRICA IS HERE!!
      </p>
      <p className="text-moundUpBlack mt-1 md:mt-2 text-[25px] leading-[173.4%] font-black md:text-moundUpGreen md:text-4xl text-center md:text-left">
        {`A fully integrated approach to startup funding`.toUpperCase()}
      </p>
      <p className="pt-8 md:pt-10 pb-4 tracking-tight md:tracking-normal">
        Moundup creates a space where startups/MSMEs can seamlessly raise
        capital from members of the public and investors on their own terms,
        while regular people can invest in thriving StartUps which they may not
        have had the opportunity to invest in earlier.
      </p>
      <strong className="font-normal leading-[164.4%]">
        <b className="block">The best part?</b> These will be done on their own
        terms.
      </strong>
      <p className="mt-6 md:mt-8">
        <WaitListButton />
      </p>
    </section>
    <div className="relative h-[40rem] w-1/2 hidden md:block self-end">
      <Image
        src={"/vector-painted-rocket.png"}
        alt=""
        fill
        className="object-cover object-left-top"
      />
    </div>
  </div>
);
