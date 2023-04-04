import { Input } from '@/components/atoms';
import { useActive } from '@/stores/navSection';
import { useIntersection } from '@/utils/intersection';
import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';

export const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const inViewport = useIntersection(ref, '-100px');
  const { setActive } = useActive();

  useEffect(() => {
    if (inViewport) setActive('Contact');
  }, [inViewport, setActive]);

  const handleSubmit = async () => {
    setIsSendingEmail(true);
    const resp = await emailjs.send(
      'service_dcmvrox',
      'template_ipp0ha8',
      {
        from_name: name,
        to_name: 'Thiago',
        from_email: email,
        to_email: 'thiagocosssta@gmail.com',
        message: message,
      },
      'BLhCX06rL_P7MTBJG'
    );
    if (resp?.status === 200) {
      alert('Email enviado! Retornarei o mais rápido possível :) Obrigado');
    } else {
      alert('Algo deu errado :/ Poderia tentar de novo?');
    }
    setIsSendingEmail(false);
    clearStates();
  };

  const clearStates = () => {
    setName('');
    setEmail('');
    setMessage('');
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
        <div
          className='rounded-lg p-5 sm:w-[450px] w-[300px] mt-5 flex flex-col gap-4 bg-slate-600'
          style={{
            transform: inViewport ? 'translate-x-0' : 'translate-x-full',
          }}
        >
          <Input
            label='Your name'
            name={name}
            value={name}
            onChange={setName}
          />
          <Input
            label='Your email'
            name={email}
            value={email}
            onChange={setEmail}
          />
          <Input
            type='textarea'
            label='Message'
            name={message}
            value={message}
            onChange={setMessage}
          />
          <button
            disabled={!name || !email || !message || isSendingEmail}
            onClick={handleSubmit}
            className='w-full rounded-full bg-green-300 disabled:bg-gray-400 transition-all ease-linear py-3 px-8 mt-6 outline-none text-white font-bold shadow-md'
          >
            {isSendingEmail ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </div>
    </div>
  );
};
