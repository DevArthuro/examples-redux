import { useSelector } from "react-redux";
import { selectUsers } from "../store/slices/users";
import TimeAgo from "./timeAgo";
import ReactionButtons from "./reactionButtons";
import { Link } from "react-router-dom";

const UniquePost = ({ post }) => {
  const users = useSelector(selectUsers);
  return (
    <article>
      <h4>{post.title}</h4>
      <p>{post.body.substring(0, 50)}</p>
      <p>
        Author:{" "}
        <i>
          {users.find((user) => user.id === post.userId)?.name ??
            "Unknown User"}
        </i>
      </p>
      <p>
        Date: <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <Link to={`post/${post.id}`}>Ir al detalle</Link>
    </article>
  );
};

export default UniquePost;
