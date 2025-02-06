import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function Example() {
  return <Carousel></Carousel>;
}

export function CarouselComponent() {
  return (
    <section>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          <CarouselItem className="flex flex-col items-center justify-center text-center h-[30vh]">
            <p className="text-sm text-sky-800 max-md:text-xs w-2/3 max-md:w-full">
              We hired Smart HVAC to install a new heating system in our home,
              and it was the best decision we could have made! From the initial
              consultation to the final installation, the team was professional,
              knowledgeable, and incredibly efficient. They cleaned up
              everything afterward, and the system has been running flawlessly
              ever since. We highly recommend Smart HVAC to anyone looking for
              top-notch service!
            </p>
            <p className="text-xs mt-2">— Sarah and Michael Thompson</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-center text-center h-[30vh]">
            <p className="text-sm text-sky-800 max-md:text-xs w-2/3 max-md:w-full">
              Smart HVAC installed air conditioning in our entire house, and we
              couldn’t be happier! The team was punctual, friendly, and took the
              time to explain every step of the process. The installation was
              quick and hassle-free, and the system works perfectly. We’ve
              already recommended them to our friends and family. Thank you,
              Smart HVAC, for keeping our home cool and comfortable!
            </p>
            <p className="text-xs mt-2">— Emily and David Carter</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-center text-center h-[30vh]">
            <p className="text-sm text-sky-800 max-md:text-xs w-2/3 max-md:w-full">
              My wife, Carla, and I hired Smart HVAC to install the air
              conditioning in our office and we are super satisfied! Nelo was
              very attentive from the first moment, explaining everything
              clearly and answering all our doubts. Installation was quick,
              mess-free, and the air conditioning was perfect! Now, maintenance
              is being done regularly and the system works like clockwork. We
              could&apos;t have made a better choice! I highly recommend Smart
              HVAC, they are awesome!
            </p>
            <p className="text-xs mt-2">— Alana Rodge</p>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
