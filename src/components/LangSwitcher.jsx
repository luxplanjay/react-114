/**
 * Використовує контекст вибору мови,
 * не отримує пропсів.
 */

import { use } from 'react';
import { LangContext } from '../contexts/contexts';

export default function LangSwitcher() {
  const { lang, changeLang } = use(LangContext);

  const handleChange = (event) => {
    changeLang(event.target.value);
  };

  return (
    <select value={lang} onChange={handleChange}>
      <option value="uk">Українська</option>
      <option value="en">English</option>
      <option value="pl">Polski</option>
      <option value="es">Española</option>
      <option value="de">Deutsch</option>
    </select>
  );
}
