import i18n from '@/i18n';
import { Contact, Hero, More, Navbar, Stack, Work } from '@/sections';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Thiago | Portifólio</title>
        <link rel='icon' href='/tclogo.vsg' />
      </Head>
      <main>
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
