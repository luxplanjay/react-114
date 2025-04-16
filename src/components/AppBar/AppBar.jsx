import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.container}>
      <Logo />
      <UserMenu />
    </header>
  );
}
