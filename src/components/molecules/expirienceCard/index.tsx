import { IcTm1 } from '@/assets';
import { ExpirienceProps } from '@/types';
import Image from 'next/image';
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type ExpirienceCardProps = {
  expirience: ExpirienceProps;
};

export const ExpirienceCard = ({ expirience }: ExpirienceCardProps) => {
  return (
    <VerticalTimelineElement
      key={expirience?.id}
      contentStyle={{ background: '#242424' }}
      contentArrowStyle={{ borderRight: '7px solid #87EEAB' }}
      date={expirience?.date}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            className='object-contain rounded-full'
            src={expirience?.logo}
            alt='image logo'
          />
        </div>
      }
      iconStyle={{ background: 'white' }}
    >
      <h3 className='text-white text-xl font-bold'>{expirience?.role}</h3>
      <h5 className='text-green-300 text-sm font-bold'>
        {expirience?.company}
      </h5>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {expirience?.responsibilities.map((responsability, index) => (
          <li
            key={`expirience-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {responsability}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
