import clsx from 'clsx';
import css from './AlertBox.module.css';

export default function AlertBox({ type, text }) {
  return (
    <p
      className={clsx(
        css.alert,
        type === 'success' && css.isSuccess,
        type === 'error' && css.isError,
      )}
    >
      {text}
    </p>
  );
}
