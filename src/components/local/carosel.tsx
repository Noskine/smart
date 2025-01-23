import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Example() {
  return <Carousel>// ...</Carousel>;
}

export function CarouselComponent() {
  return (
    <section>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          <CarouselItem className="flex flex-col items-center justify-center text-center h-[30vh]">
            <p className="text-sm text-sky-800 max-md:text-xs w-2/3 max-md:w-full">
              My wife, Carla, and I hired Smart HVAC to install the air
              conditioning in our office and we are super satisfied! Nelo was
              very attentive from the first moment, explaining everything
              clearly and answering all our doubts. Installation was quick,
              mess-free, and the air conditioning was perfect! Now, maintenance
              is being done regularly and the system works like clockwork. We
              couldn't have made a better choice! I highly recommend Smart HVAC,
              they are awesome!
            </p>
            <p className="text-xs mt-2">— John and Carla Marlyn</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-center text-center h-[30vh]">
            <p className="text-sm text-sky-800 max-md:text-xs w-2/3 max-md:w-full">
              I had an air conditioner that was no longer working well, and
              after a few failed attempts to fix it, I decided to call Smart
              HVAC. Nelo promptly sent a team to my house, carried out a
              complete diagnosis and quickly found the problem. The maintenance
              work was done with care, and the system is now working better than
              ever! They are super professional and attentive. Now, I maintain
              them regularly and no longer worry about the air conditioning. I
              highly recommend it!
            </p>
            <p className="text-xs mt-2">— John and Carla Marlyn</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-center text-center h-[30vh]">
            <p className="text-sm text-sky-800 max-md:text-xs w-2/3 max-md:w-full">
              My wife, Carla, and I hired Smart HVAC to install the air
              conditioning in our office and we are super satisfied! Nelo was
              very attentive from the first moment, explaining everything
              clearly and answering all our doubts. Installation was quick,
              mess-free, and the air conditioning was perfect! Now, maintenance
              is being done regularly and the system works like clockwork. We
              couldn't have made a better choice! I highly recommend Smart HVAC,
              they are awesome!
            </p>
            <p className="text-xs mt-2">— Alana Rodge</p>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
