import { SectionDescriptionProps } from '@/types';

export const SectionDescription = ({
  title,
  subtitle,
}: SectionDescriptionProps) => {
  return (
    <div className='flex flex-col'>
      <h3 className='text-[36px] mt-7 sm:text-[42px] font-bold text-green-400'>
        {title}
      </h3>
      <span className='uppercase text-xs sm:text-[15px]'>{subtitle}</span>
    </div>
  );
};
