import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ENUS from './locales/en/en-us.json';
import PTBR from './locales/pt/pt-br.json';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
