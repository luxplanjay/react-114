import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import UserList from "../components/UserList/UserList";
import { fetchUsers } from "../services/userService";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchQuery = (event) => {
    const newQuery = event.target.value;
    const nextSearchParams = new URLSearchParams(searchParams);

    if (newQuery !== "") {
      nextSearchParams.set("query", newQuery);
    } else {
      nextSearchParams.delete("query");
    }

    setSearchParams(nextSearchParams);
  };

  useEffect(() => {
    setLoading(true);
    fetchUsers(debouncedQuery)
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  return (
    <>
      <input type="text" value={query} onChange={changeSearchQuery} />
      {loading && <strong>Loading users data...</strong>}
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}
