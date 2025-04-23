/**
 * - Додати обратник keydown при монтуванні
 * - Закривати по Escape
 * - Розібрати чому реєструється два слухача (Strict Mode)
 * - Очистити слухач при розмонтуванні
 */

import { useEffect } from 'react';
import css from './Sidebar.module.css';

// mount (effect) > unmount > mount (effect)

export default function Sidebar({ onClose }) {
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <div className={css.wrapper}>
      <button onClick={onClose}>Close</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatum culpa modi? Quaerat repellat sit error officia dolore?
        Suscipit nisi aliquam voluptates accusamus repellat illo expedita
        necessitatibus laudantium animi quo?
      </p>
    </div>
  );
}
