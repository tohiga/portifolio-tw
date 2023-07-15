import { Input } from '@/components/atoms';
import { SectionDescription } from '@/components/molecules';
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
import { useTranslation } from 'react-i18next';
import { ZodError, z } from 'zod';

const EJS_SERVICE = process.env.NEXT_PUBLIC_SERVICE_EJS!;
const EJS_TEMPLATE = process.env.NEXT_PUBLIC_TEMPLATE_EJS!;
const EJS_KEY = process.env.NEXT_PUBLIC_KEY_EJS!;

type FieldErrors<T> = {
  [K in keyof T]?: string;
};

export const Contact = () => {
  type FormData = z.infer<typeof schema>;
  const { t } = useTranslation();
  const schema = z.object({
    name: z.string().min(2, t('MinNameError')).max(50, t('MaxNameError')),
    email: z.string().email(t('EmailError')),
    message: z.string().min(5, t('MessageError')),
  });

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
    if (inViewport) setActive(t('Contact'));
  }, [inViewport, setActive, t]);

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
      id={t('Contact')}
      className='p-5 pt-18 sm:p-20 justify-center max-w-[1240px] m-auto text-center sm:text-left'
    >
      <div className='flex flex-col'>
        <SectionDescription title={t('ContactMe')} subtitle={t('GetInTouch')} />
      </div>
      <div
        className={`flex justify-center pt-0  ${
          inViewport && 'animate-slide-in-right'
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className='z-10hover:shadow-green-500 top border border-solid border-green-400 
          transition-transform rounded-lg p-5 sm:w-[450px] w-[300px] mt-6 flex 
          flex-col gap-4'
          style={{
            transform: inViewport ? 'translate-x-0' : 'translate-x-full',
          }}
        >
          <Input
            label={t('YourName')}
            name={'name'}
            value={formData.name}
            onChange={handleChange}
            error={formErrors?.name || ''}
          />
          <Input
            label={t('YourEmail')}
            name={'email'}
            value={formData.email}
            onChange={handleChange}
            error={formErrors?.email || ''}
          />
          <Input
            type='textarea'
            label={t('Message')}
            name={'message'}
            value={formData.message}
            onChange={handleChange}
            error={formErrors?.message || ''}
          />
          <button
            type='submit'
            disabled={isSendingEmail}
            className='w-full rounded-full bg-green-400 hover:bg-green-500 disabled:bg-gray-400 transition-all ease-linear py-3 px-8 mt-6 outline-none text-slate-50 dark:text-zinc-900 font-bold shadow-md'
          >
            {isSendingEmail ? t('Sending') : t('Send')}
          </button>
        </form>
      </div>
    </div>
  );
};
