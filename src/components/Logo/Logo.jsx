import { ImAirplane } from 'react-icons/im';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <a href="" className={css.logo}>
      <ImAirplane className={css.icon} />
      Cat App Logo
    </a>
  );
}
