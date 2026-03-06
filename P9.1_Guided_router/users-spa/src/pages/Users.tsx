import { Link } from "react-router";
import { useUsers } from "../hooks/useUsers";

function Users() {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name} {user.surname}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Users;
