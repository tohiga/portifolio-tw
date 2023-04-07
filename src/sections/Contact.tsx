import { Input } from '@/components/atoms';
import { useActive } from '@/stores/navSection';
import { useIntersection } from '@/utils/intersection';
import emailjs from '@emailjs/browser';
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { z, ZodError } from 'zod';

const EJS_SERVICE = process.env.NEXT_PUBLIC_SERVICE_EJS!;
const EJS_TEMPLATE = process.env.NEXT_PUBLIC_TEMPLATE_EJS!;
const EJS_KEY = process.env.NEXT_PUBLIC_KEY_EJS!;

const schema = z.object({
  name: z
    .string()
    .min(2, 'Name must contain at least 2 characters')
    .max(50, 'Name must contain at most 50 characters'),
  email: z.string().email(),
  message: z.string().min(5, 'Message must contain at least 5 characters'),
});

type FieldErrors<T> = {
  [K in keyof T]?: string;
};

type FormData = z.infer<typeof schema>;

export const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<FieldErrors<FormData>>();
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const inViewport = useIntersection(ref, '-100px');
  const { setActive } = useActive();

  useEffect(() => {
    if (inViewport) setActive('Contact');
  }, [inViewport, setActive]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSendingEmail(true);

    try {
      schema.parse(formData);
      const resp = await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          from_name: formData.name,
          to_name: 'Thiago',
          from_email: formData.email,
          to_email: 'thiagocosssta@gmail.com',
          message: formData.message,
        },
        EJS_KEY
      );
      if (resp?.status === 200) {
        alert(
          'Email sent! I`ll get back to you as soon as possible :) Thank you.'
        );
      } else {
        alert('Something went wrong :/ Could you try again?');
      }
      clearStates();
    } catch (error) {
      if (error instanceof ZodError) {
        setFormErrors(error.formErrors.fieldErrors);
      }
    }
    setIsSendingEmail(false);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: '',
    }));
  };

  const clearStates = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div
      ref={ref}
      id='Contact'
      className='p-10 sm:p-20 justify-center max-w-[1240px] m-auto text-center sm:text-left'
    >
      <div className='flex flex-col'>
        <span className='uppercase mt-8 text-xs sm:text-[15px] text-gray-400 '>
          Get in Touch
        </span>
        <h3 className='text-[36px] sm:text-[42px] font-bold text-green-300'>
          Contact me.
        </h3>
      </div>
      <div
        className={`flex justify-center pt-0  ${
          inViewport && 'animate-slide-in-right'
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className='z-10hover:shadow-green-500 top border border-solid border-green-300 
          transition-transform rounded-lg p-5 sm:w-[450px] w-[300px] mt-5 flex 
          flex-col gap-4'
          style={{
            transform: inViewport ? 'translate-x-0' : 'translate-x-full',
          }}
        >
          <Input
            label='Your name'
            name={'name'}
            value={formData.name}
            onChange={handleChange}
            error={formErrors?.name || ''}
          />
          <Input
            label='Your email'
            name={'email'}
            value={formData.email}
            onChange={handleChange}
            error={formErrors?.email || ''}
          />
          <Input
            type='textarea'
            label='Message'
            name={'message'}
            value={formData.message}
            onChange={handleChange}
            error={formErrors?.message || ''}
          />
          <button
            type='submit'
            disabled={isSendingEmail}
            className='w-full rounded-full bg-green-300 hover:bg-green-400 disabled:bg-gray-400 transition-all ease-linear py-3 px-8 mt-6 outline-none text-black font-bold shadow-md'
          >
            {isSendingEmail ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
};
