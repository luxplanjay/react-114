import { NavLink } from "react-router-dom";
import css from "./AppHeader.module.css";
import clsx from "clsx";

const getActiveLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AppHeader() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={getActiveLinkClass}>
          Home
        </NavLink>
        <NavLink to="/dashboard" className={getActiveLinkClass}>
          Dashboard
        </NavLink>
      </nav>
    </header>
  );
}
