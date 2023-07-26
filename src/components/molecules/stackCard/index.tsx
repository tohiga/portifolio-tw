import { Card } from '@/components/atoms';
import { Tecnology } from '@/types';
import { t } from 'i18next';
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
        <span className='pb-2 font-semibold'>{tecnology.name}</span>
      </Card>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div className='flex text-center p-5 justify-center flex-col '>
          <span className='text-green-400 font-semibold text-xl'>
            {tecnology.name}
          </span>
          <span className='text-zinc-600 dark:text-slate-50 text-justify mt-5'>
            {t(tecnology.name.replace(' ', ''))}
          </span>
        </div>
      </Modal>
    </>
  );
};
