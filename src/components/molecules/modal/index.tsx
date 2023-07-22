import { ReactElement } from 'react';

type ModalProps = {
  isVisible: boolean;
  children: ReactElement;
  onClose: () => void;
};

export const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') {
      onClose();
    }
  };
  return (
    <div
      onClick={(e) => handleClose(e)}
      id='wrapper'
      className='fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    >
      <div className='w-[500px] min-h-[200px] p-3 rounded-md bg-slate-200 dark:bg-zinc-600 flex flex-col'>
        {children}
      </div>
    </div>
  );
};
