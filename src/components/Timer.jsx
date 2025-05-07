/**
 * - Зберігання значень між оновленнями компонента
 * - Відсутність реактивності
 */

import { useRef, useState } from 'react';

// 1 рендер > intervalRef = undefined
// startTimer > intervalRef = 14
// setTime > state update > Timer update
// 2 рендер > intervalRef = 14
// stopTimer > intervalRef = 14

export default function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      console.log('Interval');
      setTime(time + 1);
    }, 1000);

    console.log('startTimer: ', intervalRef);
  };

  const stopTimer = () => {
    console.log('stopTimer', intervalRef);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>Час: {time} секунд</p>
      <button onClick={startTimer}>Старт</button>
      <button onClick={stopTimer}>Стоп</button>
    </div>
  );
}
