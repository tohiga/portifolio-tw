import { useActive } from '@/stores/navSection';
import { useIntersection } from '@/utils/intersection';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'react-typed';

export const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();
  const { setActive } = useActive();
  const inViewport = useIntersection(ref, '-100px');
  const pushToSection = () => {
    setActive(t('Work'));
    let element = document.getElementById(t('Work'));
    element && element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (inViewport) setActive(t('Home'));
  }, [inViewport, setActive, t]);

  return (
    <div ref={ref} id={t('Home')}>
      <div className='max-w-[800px] h-[100vh]    mx-auto flex flex-col items-center justify-center'>
        <p className=' uppercase font-bold'>{t('HeroTitle')}</p>
        <h1 className='  md:text-7xl py-2 uppercase sm:text-6xl text-4xl font-bold'>
          WEB{' '}
          <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text md:text-7xl py-2 uppercase sm:text-6xl text-4xl font-bold animate-gradient'>
            DEVELOPER
          </span>
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl pt-1 sm:text-3xl text-1xl font-bold'>
            {t('HeroSubtitle')}
          </p>
          <Typed
            className='text-1xl font-bold pl-2 text-gray-400 md:text-4xl pt-1 uppercase sm:text-3xl'
            strings={['React', 'Tailwind', 'Typescript', 'Zustand']}
            typeSpeed={140}
            backSpeed={140}
            loop
          />
        </div>
        <button
          onClick={pushToSection}
          className='bg-green-400 rounded-md w-[170px] sm:w-[220px] my-5 p-3 hover:bg-green-500 transition-all ease-linear'
        >
          <span className='font-bold sm:text-lg text-slate-50 dark:text-zinc-900 text-sm'>
            {t('GetStarted')}
          </span>
        </button>
      </div>
    </div>
  );
};
