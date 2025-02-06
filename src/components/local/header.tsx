import Image from 'next/image';
import logo from '@/assets/icon.png';

export function Header() {
  return (
    <header
      className={
        'bg-sky-700 text-white px-4 py-2 rounded-b-xl text-xs flex justify-between items-center shadow-md'
      }
    >
      <Image src={logo} alt="" className={'brightness-[100] w-[30px]'} />
      <nav>
        <ul className={'flex items-center gap-4'}>
          <li className={''}>
            <a href="#services">Services</a>
          </li>
          <li className={''}>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li
            className={
              'border-sky-200 border px-2 py-1 rounded-md bg-sky-700 hover:scale-105 transition-transform cursor-pointer'
            }
          >
            <a href="/linktree">Contact Now</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
