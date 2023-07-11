import { IcTranslate, IcTranslatePng } from '@/assets';
import i18n from '@/i18n';
import { useActive } from '@/stores/navSection';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

type NavLink = {
  title: string;
  id: number;
};

export const Navbar = () => {
  const { t } = useTranslation();
  const [showNavIcon, setShowNavIcon] = useState<boolean>(true);
  const { active, setActive } = useActive();

  const invertLanguage: {
    [key: string]: string;
  } = {
    'pt-BR': 'en-US',
    'en-US': 'pt-BR',
  };

  const changeLanguage = () => {
    i18n
      .changeLanguage(invertLanguage[i18n.language])
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    setShowNavIcon(!showNavIcon);
  };

  const navLinks: NavLink[] = [
    { title: t('Home'), id: 0 },
    { title: t('Work'), id: 1 },
    { title: t('Stack'), id: 2 },
    { title: t('More'), id: 3 },
    { title: t('Contact'), id: 4 },
  ];

  const pushToSection = (section: string) => {
    setActive(section);
    setShowNavIcon(true);
    let element = document.getElementById(section);
    element && element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='bg-black fixed top-0 z-20 inset-x-0 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <div className='flex gap-5'>
        <h1 className='w-full z-20 text-3xl font-bold text-green-300 uppercase'>
          thiago.
        </h1>
        <Image
          onClick={changeLanguage}
          className='top-0 z-20 cursor-pointer'
          src={IcTranslate}
          alt='traduzir'
          width={32}
          height={35}
        />
      </div>

      <ul
        className={`fixed pt-20 ease-in-out duration-400 left-0 top-0 
        w-[60%] h-full border-r border-r-gray-900 bg-black 
        md:flex md:relative md:translate-x-0 md:duration-0 md:h-24 md:justify-end md:items-center md:w-full md:border-none md:pt-0 
        ${!showNavIcon ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {navLinks.map((nav) => {
          return (
            <li
              key={nav.id}
              onClick={() => pushToSection(nav.title)}
              className={`${
                active === nav.title ? 'text-green-300' : 'text-gray-400'
              } m-4 cursor-pointer transition-all duration-1000 ease-in-out`}
            >
              {nav.title}
            </li>
          );
        })}
      </ul>
      <div onClick={handleClick} className='cursor-pointer block md:hidden'>
        {showNavIcon ? (
          <AiOutlineMenu size={20} />
        ) : (
          <AiOutlineClose size={20} />
        )}
      </div>
    </div>
  );
};
