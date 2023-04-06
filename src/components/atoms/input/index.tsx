type InputProps = {
  name: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
};

export const Input = ({
  name,
  type,
  onChange,
  placeholder,
  value,
  label,
}: InputProps) => {
  return (
    <label className='flex flex-col'>
      <span className='text-slate-200 font-medium mb-2'>{label}</span>
      {type === 'textarea' ? (
        <textarea
          rows={6}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='bg-gray-900 text-slate-200 py-2 sm:py-4 px-6 rounded-lg outline-none border-none'
          placeholder={placeholder || ''}
        />
      ) : (
        <input
          type={type || 'text'}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='bg-gray-900 text-slate-200 py-2 sm:py-4 px-6 rounded-lg outline-none border-none'
          placeholder={placeholder || ''}
        />
      )}
    </label>
  );
};
