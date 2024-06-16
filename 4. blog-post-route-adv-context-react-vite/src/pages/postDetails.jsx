import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  deletePost,
  getPostsStatus,
  selectPostDetailById,
} from "../store/slices/posts";
import TimeAgo from "../components/timeAgo";
import ReactionButtons from "../components/reactionButtons";
import AuthorPost from "../components/authorPost";

const PostDetails = () => {
  let content = "";

  const { postId } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(getPostsStatus);

  const post =
    useSelector((state) => selectPostDetailById(state, Number(postId))) ?? null;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = (
      <article>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <p>
          Author:{" "}
          <i>
            <AuthorPost userId={post.userId} />
          </i>
        </p>
        <p>
          Date: <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
        <Link to={`/post/edit/${postId}`}>Edit post</Link>
        {` - `}
        <Link to={`/`} onClick={() => dispatch(deletePost(post.id))}>
          Delete
        </Link>
      </article>
    );
  } else if (status === "failed") {
    content = <div>Error to request</div>;
  }
  // if (!post) {
  //   return <h1>Post Not Found</h1>;
  // }
  return <div>{content}</div>;
};

export default PostDetails;
