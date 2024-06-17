import { useSelector } from "react-redux";
import { selectUsers } from "../store/slices/users";
import { Link } from "react-router-dom";

const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <div>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UsersList;
