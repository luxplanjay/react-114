import { useEffect, useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('totalCount');
    if (savedCount !== null) {
      return JSON.parse(savedCount);
    }
    return 0;
  });

  const updateCount = () => setCount(count + 1);

  useEffect(() => {
    console.log('localStorage.setItem');
    localStorage.setItem('totalCount', JSON.stringify(count));
  }, [count]);

  return (
    <>
      <button onClick={updateCount}>Total count {count}</button>
    </>
  );
}
