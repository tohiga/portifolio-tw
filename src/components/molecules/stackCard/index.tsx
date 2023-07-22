import { Card } from '@/components/atoms';
import { Tecnology } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../modal';

type StackCardProps = {
  tecnology: Tecnology;
};

export const StackCard = ({ tecnology }: StackCardProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleClick = () => {
    setIsVisible(true);
  };
  return (
    <>
      <Card onClick={handleClick}>
        <Image
          width={100}
          height={100}
          src={tecnology.icon}
          alt='tecnology image'
        />
        <span className='pb-2 font-bold'>{tecnology.name}</span>
      </Card>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div className='flex justify-center'>
          <span className='text-zinc-600 dark:text-slate-50'>
            {tecnology.name}
          </span>
        </div>
      </Modal>
    </>
  );
};
