import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Card = ({ children, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        onClick && 'cursor-pointer'
      }  h-44 w-[140px] sm:w-[200px] sm:h-56 justify-between items-center flex flex-col 
    bg-slate-700 py-5  rounded-[20px] shadow-card
      transition-transform hover:scale-105`}
    >
      {children}
    </div>
  );
};
