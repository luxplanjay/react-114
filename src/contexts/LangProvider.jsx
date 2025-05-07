import { useState } from 'react';
import { LangContext } from './contexts';

export default function LangProvider({ children }) {
  const [lang, setLang] = useState('uk');

  return (
    <LangContext
      value={{
        lang: lang,
        changeLang: setLang,
      }}
    >
      {children}
    </LangContext>
  );
}
