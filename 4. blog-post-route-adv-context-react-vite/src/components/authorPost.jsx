import { useSelector } from "react-redux";
import { selectUserById } from "../store/slices/users";

const AuthorPost = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  return <>{user && user.name}</>;
};

export default AuthorPost;
