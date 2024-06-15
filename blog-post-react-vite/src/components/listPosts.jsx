import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../store/slices/posts";
import { selectUsers } from "../store/slices/users";
import TimeAgo from "./timeAgo";
import ReactionButtons from "./reactionButtons";

const ListPosts = () => {
  const posts = useSelector(selectPosts);
  const users = useSelector(selectUsers);

  const sortedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <h2>All posts published</h2>
      {sortedPost.map((post) => (
        <article key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.content.substring(0, 100)}</p>
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
        </article>
      ))}
    </section>
  );
};

export default ListPosts;
