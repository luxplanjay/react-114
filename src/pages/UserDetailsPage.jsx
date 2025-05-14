import { Suspense, useEffect, useRef, useState } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import UserInfo from "../components/UserInfo/UserInfo";
import { fetchUserById } from "../services/userService";

export default function UserDetailsPage() {
  const location = useLocation();
  const backlinkRef = useRef(location.state);

  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(userId).then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      <Link to={backlinkRef.current}>Go back</Link>

      {user && <UserInfo user={user} />}

      <ul>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="todos">Todos</NavLink>
        </li>
      </ul>

      <Suspense fallback={<strong>Loading subcomponent...</strong>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
