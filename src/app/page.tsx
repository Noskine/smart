'use client';

import Image from 'next/image';
import imageBG from '@/assets/7005295.jpg';
import { FlipWords } from '@/components/ui/flip-words';
import { Header } from '@/components/local/header';
import { FaLinkSlash } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { CarouselComponent } from '@/components/local/carosel';
import { Footer } from '@/components/local/footer';
import Link from 'next/link';
import { LayoutGridDemo } from '@/components/local/layout-grid-demo';

export default function Home() {
  const words = ['maintenance', 'installation', 'refrigeration'];
  return (
    <motion.main
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      className={'px-[5%] overflow-hidden'}
    >
      <Header />
      <section className={' space-y-4 mt-6 w-3/4 max-sm:w-full'}>
        <span
          className={
            'text-xs bg-sky-200 px-3 py-1 rounded-xl border border-sky-300 text-sky-800 max-sm:block max-sm:text-center'
          }
        >
          The best concept in air conditioning
        </span>
        <h1
          className={
            'text-4xl font-black uppercase text-zinc-900 max-sm:text-2xl max-sm:text-center'
          }
        >
          Working with everything you need in refrigeration. Always providing
          the best service in{' '}
          <FlipWords words={words} className={'text-sky-700'} /> <br />
        </h1>
        <p
          className={
            'text-xs w-1/2 text-justify overflow-x-hidden max-sm:text-center max-sm:w-full'
          }
        >
          Air Conditioning Specialists: We offer Installation, Preventive and
          Corrective Maintenance, Professional Cleaning and Customized Solutions
          to Ensure Maximum Thermal Comfort in Your Home or Business. With Fast
          Service, Guaranteed Quality and Over 5 Years of Experience in the
          Market, We Are the Right Choice for Your Well-Being!
        </p>
        <section className={'flex gap-2 max-sm:justify-center'}>
          <Link href={'#services'}>
            <button
              className={
                'bg-sky-700 px-3 py-1 w-[180px] rounded-xl hover:scale-105 transition-transform shadow-md text-white'
              }
            >
              Services
            </button>
          </Link>
          <Link href="/linktree">
            <button
              className={
                'border border-zinc-900 px-3 py-1 w-[180px] rounded-xl text-zinc-900 shadow-md hover:border-sky-700 hover:text-white hover:bg-sky-700 transition-colors'
              }
            >
              Contact Now
            </button>
          </Link>
        </section>
      </section>
      <section className={'relative my-8'}>
        <section
          className={
            ' h-[60vh] mt-12 overflow-hidden rounded-3xl max-sm:h-[30vh]'
          }
        >
          <Image
            src={imageBG}
            alt={''}
            className={'w-full object-cover object-center shadow-md'}
          />{' '}
          <button
            className={
              'w-[60px] h-[50px] absolute bg-sky-700 bottom-[-30px] right-[-10px] rounded-full font-bold text-white grid place-content-center outline-4 outline-white outline'
            }
          >
            <FaLinkSlash size={18} />
          </button>
        </section>
      </section>
      <section className={'md:text-center'}>
        <span
          id="services"
          className={
            'text-sm bg-sky-200 w-1/3 text-center block md:inline px-3 py-1 rounded-2xl border border-sky-300 text-sky-800  max-sm:text-center'
          }
        >
          Services
        </span>
        <p className={'mt-5 text-xs text-sky-700'}>
          Operantes cum residentialibus et commercialibus HVAC servitiis cum
          excellentia et industria clientium!
        </p>
        <LayoutGridDemo />
      </section>
      <section className={'text-center'}>
        <span
          id="testimonials"
          className={
            'text-sm bg-sky-200 px-3 py-1 rounded-xl border border-sky-300 text-sky-800 max-sm:text-center'
          }
        >
          Testimonials and evaluations
        </span>
        <CarouselComponent />
      </section>
      <Footer />
    </motion.main>
  );
}
