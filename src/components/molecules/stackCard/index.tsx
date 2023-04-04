import { IcTm1 } from '@/assets';
import { Card } from '@/components/atoms';
import { ExperienceProps, Tecnology } from '@/types';
import Image from 'next/image';
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type StackCardProps = {
  tecnology: Tecnology;
};

export const StackCard = ({ tecnology }: StackCardProps) => {
  return (
    <Card>
      <Image
        width={100}
        height={100}
        src={tecnology.icon}
        alt='tecnology image'
      />
      <span className='pb-2 font-bold'>{tecnology.name}</span>
    </Card>
  );
};
