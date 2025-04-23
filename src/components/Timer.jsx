/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні
 */

import { useEffect, useState } from 'react';

//  mount > effect (interval) > unmount > mount > effect(interval)

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log(new Date());
    }, 1000);

    return () => {
      console.log('cleanup');
      clearInterval(intervalId);
    };
  }, []);

  return <p>TimerBox - {time.toLocaleTimeString()}</p>;
}
