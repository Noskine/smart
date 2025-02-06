'use client';

import { motion } from 'motion/react';
import icon from '@/assets/icon.png';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { Footer } from '@/components/local/footer';

export default function LinkTree() {
  return (
    <motion.main
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
    >
      <section className={'w-full h-[95vh] flex items-center justify-center'}>
        <section className={'flex flex-col items-center space-y-5'}>
          <div
            className={'bg-sky-700 rounded-full w-[100px] h-[120px] shadow-md'}
          >
            <Image
              src={icon}
              alt="icon smart hvac"
              className={'brightness-[200] p-6 '}
            />
          </div>
          <h1 className={'text-sky-700 font-bold uppercasep'}>
            SMART HVAC CORP.
          </h1>
          <Link
            href=""
            className={
              'px-3 py-1 bg-sky-700 text-white justify-center w-[300px] flex items-center gap-1 shadow-md rounded-md'
            }
          >
            Instagram <Instagram size={16} />
          </Link>
          <Link
            href=""
            className={
              'px-3 py-1 bg-sky-700 text-white w-[300px] justify-center flex items-center gap-1 shadow-md rounded-md'
            }
          >
            Whatsapp <FaWhatsapp size={16} />
          </Link>
        </section>
      </section>
      <Footer />
    </motion.main>
  );
}
