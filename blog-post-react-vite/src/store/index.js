import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import usersReducer from "./slices/users";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
