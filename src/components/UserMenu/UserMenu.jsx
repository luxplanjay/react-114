import { ImAndroid } from 'react-icons/im';
import css from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={css.container}>
      <ImAndroid />
      <p>Welcome, Jacob!</p>
      <button>Log out</button>
    </div>
  );
}
