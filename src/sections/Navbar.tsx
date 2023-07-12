import { IcMoon, IcSun, IcTranslate } from '@/assets';
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
  const { active, setActive, setDarkMode, darkMode } = useActive();

  const invertLanguage: {
    [key: string]: string;
  } = {
    'pt-BR': 'en-US',
    'en-US': 'pt-BR',
  };

  const changeLanguage = () => {
    i18n.changeLanguage(invertLanguage[i18n.language]);
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

  const changeTheme = () => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    setDarkMode(!darkMode);
    !darkMode ? bodyClass.add(className) : bodyClass.remove(className);
  };

  const pushToSection = (section: string) => {
    setActive(section);
    setShowNavIcon(true);
    let element = document.getElementById(section);
    element && element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='bg-slate-50 dark:bg-zinc-950 fixed top-0 z-20 inset-x-0 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <div className='flex gap-5'>
        <h1 className='w-full z-20 text-3xl font-bold text-green-400 uppercase'>
          thiago.
        </h1>
      </div>

      <ul
        className={`fixed pt-20 ease-in-out duration-400 left-0 top-0 
        w-[60%] h-full border-r border-r-gray-900 bg-slate-50 dark:bg-zinc-950
        md:flex md:relative md:translate-x-0 md:duration-0 md:h-24 md:justify-end md:items-center md:w-full md:border-none md:pt-0 
        ${!showNavIcon ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {navLinks.map((nav) => {
          return (
            <li
              key={nav.id}
              onClick={() => pushToSection(nav.title)}
              className={`${
                active === nav.title ? 'text-green-400' : 'text-gray-400'
              } m-4 cursor-pointer transition-all duration-1000 ease-in-out`}
            >
              {nav.title}
            </li>
          );
        })}
        <div className='flex mx-4 gap-5 pt-2 md:pt-0'>
          <div className='w-px bg-gray-400 mx-auto h-[22px] hidden md:flex'></div>
          <Image
            onClick={changeLanguage}
            className='cursor-pointer'
            src={IcTranslate}
            alt='traduzir'
            width={22}
          />
          <Image
            onClick={changeTheme}
            className=' cursor-pointer'
            src={darkMode ? IcSun : IcMoon}
            alt='darkmode'
            width={22}
          />
        </div>
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
