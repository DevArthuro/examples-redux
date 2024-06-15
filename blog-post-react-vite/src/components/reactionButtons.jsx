import { useDispatch } from "react-redux";
import { enterReaction } from "../store/slices/posts";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const saveReaction = (reaction) => {
    dispatch(enterReaction({ postId: post.id, reaction }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button key={name} type="button" onClick={() => saveReaction(name)}>
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
