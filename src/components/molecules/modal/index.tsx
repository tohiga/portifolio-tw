import { ReactElement, useEffect } from 'react';

type ModalProps = {
  isVisible: boolean;
  children: ReactElement;
  onClose: () => void;
};

export const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClose}
      id='wrapper'
      className={`fixed z-50 inset-0 backdrop-brightness-75 backdrop-blur-sm flex justify-center items-center transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`w-[400px] min-h-[420px] p-3 bg-white/80 dark:bg-zinc-800/80 transition-opacity duration-300 rounded-[15px] flex flex-col`}
      >
        {children}
      </div>
    </div>
  );
};
