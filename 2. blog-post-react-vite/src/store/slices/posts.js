import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";
import { sub } from "date-fns";

const initialState = [
  {
    id: uuid(),
    title: "La voragine",
    userId: "random",
    content: "sometext here",
    date: sub(new Date(), { minutes: 45 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: uuid(),
    title: "Un libro whatever",
    userId: "random",
    content: "sometext here",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(post) {
        const { author, ...restPost } = post;
        return {
          payload: {
            id: uuid(),
            userId: Number(author),
            ...restPost,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
            date: new Date().toISOString(),
          },
        };
      },
    },
    enterReaction: (state, action) => {
      const { postId, reaction } = action.payload;
      const existsPost = state.find((post) => post.id === postId);
      if (existsPost) {
        existsPost.reactions[reaction]++;
      }
    },
  },
});

export default posts.reducer;

export const selectPosts = (state) => state.posts;

export const { savePost, enterReaction } = posts.actions;
