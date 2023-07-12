import i18n from '@/i18n';
import { Contact, Hero, More, Navbar, Stack, Work } from '@/sections';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Thiago | Portifólio</title>
        <link rel='icon' href='/tclogo.vsg' />
      </Head>
      <main className='bg-slate-50 text-zinc-600 dark:bg-zinc-950 dark:text-slate-50'>
        <Navbar />
        <Hero />
        <Work />
        <Stack />
        <More />
        <Contact />
      </main>
    </>
  );
}
