import {
  IcAws,
  IcGraphql,
  IcJest,
  IcNext,
  IcNextDark,
  IcNode,
  IcReact,
  IcTailwind,
  IcTs,
} from '@/assets';
import { StackCard } from '@/components/molecules/stackCard';
import { useActive } from '@/stores/navSection';
import { useIntersection } from '@/utils/intersection';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Stack = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inViewport = useIntersection(ref, '-100px');
  const { t } = useTranslation();
  const { setActive, darkMode } = useActive();

  useEffect(() => {
    if (inViewport) setActive(t('Stack'));
  }, [inViewport, setActive, t]);

  const stack = [
    {
      name: 'React js',
      icon: IcReact,
    },
    {
      name: 'Tailwind',
      icon: IcTailwind,
    },
    {
      name: 'Next js',
      icon: darkMode ? IcNext : IcNextDark,
    },
    {
      name: 'Typescript',
      icon: IcTs,
    },
    {
      name: 'Node js',
      icon: IcNode,
    },
    {
      name: 'GraphQL',
      icon: IcGraphql,
    },
    {
      name: 'AWS',
      icon: IcAws,
    },
    {
      name: 'Jest',
      icon: IcJest,
    },
  ];
  return (
    <div
      ref={ref}
      id={t('Stack')}
      className='p-5 pt-20 sm:p-20 justify-center max-w-[1240px] m-auto text-center sm:text-left'
    >
      <div className='flex flex-col'>
        <span className='uppercase mt-8 text-xs sm:text-[15px] '>
          Some technologies I have experience with
        </span>
        <h3 className='text-[36px] sm:text-[42px] font-bold text-green-400'>
          My Stack
        </h3>
      </div>
      <div className='flex mt-10 flex-wrap gap-5 sm:gap-10 justify-center'>
        {stack.map((tecnology, index) => (
          <StackCard tecnology={tecnology} key={tecnology.name} />
        ))}
      </div>
    </div>
  );
};
