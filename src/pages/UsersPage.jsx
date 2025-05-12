import { useEffect, useState } from "react";
import UserList from "../components/UserList/UserList";
import { fetchUsers } from "../services/userService";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <strong>Loading users data...</strong>}
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}
