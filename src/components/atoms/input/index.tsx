import { ChangeEvent } from 'react';

type InputProps = {
  name: string;
  value: string;
  type?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  label: string;
  error?: string;
};

export const Input = ({
  name,
  type,
  onChange,
  placeholder,
  value,
  label,
  error = '',
}: InputProps) => {
  return (
    <label className='flex flex-col'>
      <span className='text-slate-200 font-medium mb-1'>{label}</span>
      {type === 'textarea' ? (
        <textarea
          rows={5}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={
            'bg-gray-900 text-slate-200 py-2 sm:py-4 px-6 rounded-lg outline-none border-none'
          }
          placeholder={placeholder || ''}
        />
      ) : (
        <input
          type={type || 'text'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={
            'bg-gray-900 text-slate-200 py-2 sm:py-4 px-6 rounded-lg outline-none border-none'
          }
          placeholder={placeholder || ''}
          autoComplete='off'
        />
      )}
      {error && <p className='text-red-500 mb-0'>{error}</p>}
    </label>
  );
};
