'use clinet';

import Image from 'next/image';
import logo from '@/assets/Logotype.png';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className={''}>
      <section
        className={'flex items-center justify-between py-3 max-sm:hidden'}
      >
        <Image src={logo} alt="logotype by smart hvac" className={'w-[10vw]'} />
        <section className="w-1/2 flex items-center justify-around">
          <div>
            <h3 className={'font-bold text-lg text-sky-700'}>Contact</h3>
            <p className={'text-sm text-zinc-900'}>+1 (561) 825-7100</p>
          </div>
          <div>
            <h3 className={'font-bold text-lg text-sky-700'}>Links</h3>
            <menu className={'flex flex-col gap-1 text-xs'}>
              <Link href="#services" className={'flex items-center gap-1'}>
                Services
                <LinkIcon size={11} />
              </Link>
              <Link href="#testimonials" className={'flex items-center gap-1'}>
                Testimonials
                <LinkIcon size={11} />
              </Link>
              <Link href="/linktree" className={'flex items-center gap-1'}>
                Contact now
                <LinkIcon size={11} />
              </Link>
            </menu>
          </div>
        </section>
      </section>
      <section className={'border-t border-zinc-200 max-sm:border-sky-200'}>
        <p className={'text-xs py-3 text-center'}>
          Copyright &copy; 2023-{new Date().getFullYear()} Smart HVAC
          Corporation
        </p>
        <ul></ul>
      </section>
    </footer>
  );
}
