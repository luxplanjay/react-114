/**
 * - Зберігання значень між оновленнями компонента
 * - Відсутність реактивності
 */

import { useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);

  const startTimer = () => {
    console.log('startTimer: ');
  };

  const stopTimer = () => {
    console.log('stopTimer');
  };

  return (
    <div>
      <p>Час: {time} секунд</p>
      <button onClick={startTimer}>Старт</button>
      <button onClick={stopTimer}>Стоп</button>
    </div>
  );
}
