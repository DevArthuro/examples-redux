import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostsStatus, selectPostsByUser } from "../store/slices/posts";
import { selectUserById } from "../store/slices/users";

const UserDetail = () => {
  const { userId } = useParams();
  const postsByUser = useSelector((state) => selectPostsByUser(state, userId));
  const user = useSelector((state) => selectUserById(state, userId));

  const status = useSelector(getPostsStatus);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <ol>
        {postsByUser.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserDetail;
