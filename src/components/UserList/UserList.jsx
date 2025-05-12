import { Link } from "react-router-dom";
import css from "./UserList.module.css";

export default function UserList({ users }) {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li key={user.id} className={css.listItem}>
          <h3 className={css.username}>
            {user.firstName} {user.lastName}
          </h3>
          <p className={css.text}>{user.email}</p>
          <p className={css.text}>{user.phone}</p>
          <Link className={css.link} to={`/dashboard/${user.id}`}>
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
}
