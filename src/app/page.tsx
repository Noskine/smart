"use client";

import Image from "next/image";
import imageBG from "@/assets/7005295.jpg";
import { FlipWords } from "@/components/ui/flip-words";
import { Header } from "@/components/local/Header";
import { FaLinkSlash } from "react-icons/fa6";


export default function Home() {
  const words = ["maintenance", "installation", "refrigeration"];
  return (
    <main className={"px-[5%] overflow-hidden"}>
      <Header />
      <section className={" space-y-5 mt-12 w-3/4 max-sm:w-full"}>
        <span
          className={
            "text-xs bg-sky-200 px-3 py-1 rounded-xl border border-sky-300 text-sky-800 max-sm:block max-sm:text-center"
          }
        >
          The best concept in air conditioning
        </span>
        <h1
          className={
            "text-4xl font-black uppercase text-zinc-900 max-sm:text-2xl max-sm:text-center"
          }
        >
          Working with everything you need in refrigeration. Always providing
          the best service in{" "}
          <FlipWords words={words} className={"text-sky-700"} /> <br />
        </h1>
        <p
          className={
            "text-xs w-1/2 text-justify overflow-x-hidden max-sm:text-center max-sm:w-full"
          }
        >
          Air Conditioning Specialists: We offer Installation, Preventive and
          Corrective Maintenance, Professional Cleaning and Customized Solutions
          to Ensure Maximum Thermal Comfort in Your Home or Business. With Fast
          Service, Guaranteed Quality and Over 5 Years of Experience in the
          Market, We Are the Right Choice for Your Well-Being!
        </p>
        <section className={"flex gap-2 max-sm:justify-center"}>
          <button
            className={
              "bg-sky-700 px-3 py-1 w-[180px] rounded-xl hover:scale-105 transition-transform shadow-md text-white"
            }
          >
            Services
          </button>
          <button
            className={
              "border border-zinc-900 px-3 py-1 w-[180px] rounded-xl text-zinc-900 shadow-md hover:border-sky-700 hover:text-white hover:bg-sky-700 transition-colors"
            }
          >
            Contact Now
          </button>
        </section>
      </section>
      <section className={"relative my-8"}>
        <section
          className={
            " h-[60vh] mt-12 overflow-hidden rounded-3xl max-sm:h-[30vh]"
          }
        >
          <Image src={imageBG} alt={""} className={"w-full object-cover"} />{" "}
          <button
            className={
              "w-[60px] h-[50px] absolute bg-sky-700 bottom-[-30px] right-[-10px] rounded-full font-bold text-white grid place-content-center outline-4 outline-white outline"
            }
          >
            <FaLinkSlash size={18} />
          </button>
        </section>
      </section>
      <section className="my-8 relative w-full">
        <span
          id="testimonials"
          className={
            "text-2xl font-bold text-sky-700 border border-sky-100 shadow-md bg-sky-200 px-3 py-1 rounded-xl"
          }
        >
          Testimonials and evaluations
        </span>
        <section className={"grid grid-cols-3"}>
          <div className={"w-2/3 col-span-2"}></div>
          <div className={"w-1/3"}></div>
        </section>
      </section>
    </main>
  );
}
