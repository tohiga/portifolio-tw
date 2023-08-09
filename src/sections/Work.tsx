import { IcAiq, IcMblabs, IcMoodar, IcSeed, IcTm1 } from '@/assets';
import { ExperienceCard, SectionDescription } from '@/components/molecules';
import { useActive } from '@/stores/navSection';
import { ExperienceProps } from '@/types';
import { useIntersection } from '@/utils/intersection';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Work = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { setActive, darkMode } = useActive();
  const { t } = useTranslation();
  const inViewport = useIntersection(ref, '-100px');

  useEffect(() => {
    if (inViewport) setActive(t('Work'));
  }, [inViewport, setActive, t]);
  const experiences: ExperienceProps[] = [
    {
      role: t('MbRole'),
      company: 'Mb Labs',
      responsibilities: [
        t('MbFirstResponsabilities'),
        t('MbSecondResponsabilities'),
      ],
      date: t('MbDate'),
      id: 0,
      logo: IcMblabs,
    },
    {
      role: t('OliRole'),
      company: 'Tm1 Brand Experience / Oli Video',
      responsibilities: [
        t('OliFirstResponsabilities'),
        t('OliSecondResponsabilities'),
      ],
      date: t('OliDate'),
      id: 1,
      logo: IcTm1,
    },
    {
      role: t('AiqRole'),
      company: 'Aiqfome',
      date: t('AiqDate'),
      responsibilities: [
        t('AiqFirstResponsabilities'),
        t('AiqSecondResponsabilities'),
      ],
      id: 2,
      logo: IcAiq,
    },
    {
      role: t('MoodarRole'),
      company: 'Moodar',
      date: t('MoodarDate'),
      responsibilities: [
        t('MoodarFirstResponsabilities'),
        t('MoodarSecondResponsabilities'),
        t('MoodarThirdResponsabilities'),
        t('MoodarFourthResponsabilities'),
      ],

      id: 3,
      logo: IcMoodar,
    },
    {
      role: t('SeedRole'),
      company: 'Seed a Bit',
      date: t('SeedDate'),
      responsibilities: [
        t('SeedFirstResponsabilities'),
        t('SeedSecondResponsabilities'),
      ],

      id: 4,
      logo: IcSeed,
    },
  ];

  return (
    <div
      ref={ref}
      id={t('Work')}
      className='max-w-[1240px] mx-auto flex flex-col p-5 pt-20 text-center sm:text-left'
    >
      <div className=' mb-4 md:mb-2 sm:ml-14 flex flex-col'>
        <SectionDescription
          title={t('MyExperience')}
          subtitle={t('WhatIveDone')}
        />
      </div>
      <VerticalTimeline lineColor='#e0e0e0'>
        {experiences?.map((experience) => {
          return (
            <ExperienceCard key={experience?.id} experience={experience} />
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
