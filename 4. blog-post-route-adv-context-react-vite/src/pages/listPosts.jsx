import { useSelector, useDispatch } from "react-redux";
import {
  selectPosts,
  getPostsError,
  getPostsStatus,
} from "../store/slices/posts";
import UniquePost from "../components/uniquePost";

const ListPosts = () => {
  const posts = useSelector(selectPosts);
  const status = useSelector(getPostsStatus);

  let content;
  if (status === "loading" && posts.length === 0) {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    const sortedPost = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = sortedPost.map((post) => (
      <UniquePost key={post.id} post={post} />
    ));
  } else if (status === "failed") {
    content = <div>Error request</div>;
  }
  // <UniquePost post={post} key={post.id} />
  return <section>{content}</section>;
};

export default ListPosts;
