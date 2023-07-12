import { IcTm1 } from '@/assets';
import { useActive } from '@/stores/navSection';
import { ExperienceProps } from '@/types';
import Image from 'next/image';
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type ExperienceCardProps = {
  experience: ExperienceProps;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { darkMode } = useActive();
  return (
    <VerticalTimelineElement
      key={experience?.id}
      contentStyle={{ background: darkMode ? '#242424' : '#e0e0e0' }}
      contentArrowStyle={{ borderRight: '7px solid #87EEAB' }}
      date={experience?.date}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            className='object-contain rounded-full'
            src={experience?.logo}
            alt='image logo'
          />
        </div>
      }
      iconStyle={{ background: 'white' }}
    >
      <h3 className=' text-xl font-bold'>{experience?.role}</h3>
      <h5 className='text-green-400 text-sm font-bold'>
        {experience?.company}
      </h5>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience?.responsibilities.map((responsability, index) => (
          <li
            key={`experience-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {responsability}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
