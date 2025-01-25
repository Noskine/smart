"use client";
import { LayoutGrid } from "../ui/layout-grid";
import one from "@/assets/images/img (1).jpeg";
import two from "@/assets/images/img (2).jpeg";
import three from "@/assets/images/img (3).jpeg";
import fuor from "@/assets/images/img (5).jpeg";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="space-y-5">
      <p className="font-bold md:text-4xl text-xl text-white">
        Installation of a New HVAC System
      </p>
      <hr className="border-zinc-400" />
      <p className="font-normal text-white text-justify pb-3">
        Installing a new HVAC system involves implementing heating, ventilation
        and air conditioning solutions, ensuring thermal comfort and air
        quality. Your company offers specialized services to create more
        efficient and economical environments, with advanced technologies and
        high performance.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="space-y-5">
      <p className="font-bold md:text-4xl text-xl text-white">
        Troubleshooting & Repair
      </p>
      <hr className="border-zinc-400" />
      <p className="font-normal text-white text-justify pb-3">
        The Troubleshooting & Repair service consists of diagnosing and
        correcting problems in HVAC and mini split systems. Your company offers
        a detailed analysis to identify faults and perform quick repairs,
        ensuring the optimal functioning of the equipment. With experienced
        professionals, the goal is to restore the comfort and efficiency of the
        system, minimizing downtime and avoiding unnecessary costs.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="space-y-5">
      <p className="font-bold md:text-4xl text-xl text-white">
        Mini Split System Installation
      </p>
      <hr className="border-zinc-400" />
      <p className="font-normal text-white text-justify">
        The{" "}
        <strong className="font-bold">
          installation of a mini split system
        </strong>{" "}
        is the implementation of a compact air conditioning system, ideal for
        environments that require flexibility and energy efficiency. Your
        company offers the installation of this type of system, which is silent,
        easy to control and provides thermal comfort without the need for major
        works. Ideal for homes and small businesses, the mini split is a
        practical and economical solution.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        We Service All Makes & models
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We service all makes and models. Our company offers maintenance, repair
        and installation services for a wide variety of HVAC and mini split
        systems, regardless of make or model. With qualified professionals and
        experience in various technologies, we ensure that your system runs
        efficiently, regardless of the manufacturer.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: one.src,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: two.src,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: three.src,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: fuor.src,
  },
];
