import { useParams } from "react-router";
import { useUsers } from "../hooks/useUsers";

function UserDetail() {
  const { id } = useParams();
  const { users } = useUsers();

  const user = users.find((u) => u.id === Number(id));

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>{user.name} {user.surname}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetail;
