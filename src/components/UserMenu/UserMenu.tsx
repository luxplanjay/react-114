import { useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/redux";

export default function UserMenu() {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
