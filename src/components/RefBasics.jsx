/**
 * - Створення та ініціалізація
 * - Зберігання посилання на елемент
 * - Життєвий цикл рефа
 *  - Ініціалізація при монтуванні
 *  - Доступ в ефектах і функціях
 */

import { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function RefBasics() {
  const [clicks, setClicks] = useState(0);
  const valueRef = useRef(0);

  const updateValue = () => {
    valueRef.current += 1;
    console.log('updateValue:', valueRef);
  };

  return (
    <div>
      <button onClick={updateValue}>Update value ref</button>
      <button onClick={() => setClicks(clicks + 1)}>
        State clicks: {clicks}
      </button>
    </div>
  );
}
