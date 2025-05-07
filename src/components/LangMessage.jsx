import { use } from 'react';
import { LangContext } from '../contexts/contexts';

const text = {
  uk: 'Вибрана мова',
  en: 'Selected language',
  pl: 'Wybrany język',
  es: 'Idioma seleccionado',
  de: 'Ausgewählte Sprache',
};

export default function LangMessage() {
  const { lang } = use(LangContext);

  return (
    <p>
      <b>{text[lang]}</b>: {lang}
    </p>
  );
}
