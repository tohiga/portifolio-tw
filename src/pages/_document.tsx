import { Head, Html, Main, NextScript } from 'next/document';
import i18nextConfig from '../../next-i18next.config';

export default function Document(this: any) {
  const currentLocale =
    this?.props.__NEXT_DATA__.locale || i18nextConfig?.i18n?.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <link rel='icon' href='/tclogo.svg' type='image/svg+xml' />
      </Head>
      <body className='dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
