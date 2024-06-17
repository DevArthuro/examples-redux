import { useSelector, useDispatch } from "react-redux";
import {
  getPostsError,
  getPostsStatus,
  selectPostByIds,
} from "../store/slices/posts";
import UniquePost from "../components/uniquePost";

const ListPosts = () => {
  const postsIds = useSelector(selectPostByIds);
  const status = useSelector(getPostsStatus);

  let content;
  if (status === "loading" && posts.length === 0) {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = postsIds.map((postId) => (
      <UniquePost key={postId} postId={postId} />
    ));
  } else if (status === "failed") {
    content = <div>Error request</div>;
  }
  // <UniquePost post={post} key={post.id} />
  return <section>{content}</section>;
};

export default ListPosts;
