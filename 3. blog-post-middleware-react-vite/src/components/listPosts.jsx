import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "../store/slices/posts";
import { useEffect } from "react";
import UniquePost from "./uniquePost";

const ListPosts = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  const status = useSelector(getPostsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

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
  return (
    <section>
      <h2>All posts published</h2>
      {content}
    </section>
  );
};

export default ListPosts;
