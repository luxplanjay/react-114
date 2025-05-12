import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import UserInfo from "../components/UserInfo/UserInfo";
import { fetchUserById } from "../services/userService";

export default function UserDetailsPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(userId).then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      {user && <UserInfo user={user} />}

      <ul>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="todos">Todos</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
