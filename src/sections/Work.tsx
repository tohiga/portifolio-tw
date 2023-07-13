import { IcAiq, IcMoodar, IcSeed, IcTm1 } from '@/assets';
import { ExperienceCard } from '@/components/molecules';
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
      role: 'Full-stack Developer',
      company: 'Tm1 Brand Experience / Oli Video',
      responsibilities: [
        'Webapp Development/ Management/ Deploy (React / Next / Typescript / GraphQL / AWS server)',
        'SDK Development/ Management/ Deploy (React / AWS server)',
      ],
      date: 'Nov 2021 - May 2023',
      id: 0,
      logo: IcTm1,
    },
    {
      role: 'FrontEnd Developer',
      company: 'Aiqfome',
      date: 'May 2021 - Nov 2021',
      responsibilities: [
        'Webapp Development/ Management (Vue.js/ React js)',
        'Unit testing (Jest)',
      ],
      id: 1,
      logo: IcAiq,
    },
    {
      role: 'Software Engineer',
      company: 'Moodar',
      date: 'Aug 2019 - May 2021',
      responsibilities: [
        ' App and Webapp Development/ Management/ Deploy (React js/React Native) ',
        'Server Development/ Management/ Deploy (Python with Django web framework) and AWS Elastic Beanstalk',
        'Cloud Functions and Realtime DB (Firebase)',
        'e2e testing (Cypress/Detox)',
      ],

      id: 2,
      logo: IcMoodar,
    },
    {
      role: 'Project Analyst',
      company: 'Seed a Bit',
      date: 'Jul 2019 - Jan 2020',
      responsibilities: [
        'App/Webapp development (React js/ React Native)',
        'Server maintenance (Python with Django web framework)',
      ],

      id: 3,
      logo: IcSeed,
    },
  ];

  return (
    <div
      ref={ref}
      id={t('Work')}
      className='max-w-[1240px] mx-auto flex flex-col p-5 pt-28 text-center sm:text-left'
    >
      <span className='pl-5 sm:pl-14 uppercase text-xs sm:text-[15px] '>
        {t('WhatIveDone')}
      </span>
      <h3 className='pl-5 sm:pl-14 text-[36px] sm:text-[42px] font-bold text-green-400 mb-3'>
        {t('MyExperience')}
      </h3>
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
