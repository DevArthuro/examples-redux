import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";
import { sub } from "date-fns";
import axios from "axios";

const BASE_URL_API = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle", // idle |	succeeded | loading | failed
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(BASE_URL_API);
    return response.data;
  } catch (error) {
    return error.message ?? `ERROR_TO_REQUEST ${BASE_URL_API}`;
  }
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async (post) => {
  try {
    const response = await axios.post(BASE_URL_API, post);
    return response.data;
  } catch (error) {
    return error.message ?? `ERROR_TO_REQUEST ${BASE_URL_API}`;
  }
});

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    enterReaction: (state, action) => {
      const { postId, reaction } = action.payload;
      const existsPost = state.posts.find((post) => post.id === postId);
      if (existsPost) {
        existsPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        let min = 1;
        const loadedPost = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        state.posts = loadedPost;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { author, ...restPost } = action.payload;
        const post = {
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
        };
        state.posts.push(post);
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default posts.reducer;

// Selectors
export const selectPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

// Actions
export const { enterReaction } = posts.actions;
