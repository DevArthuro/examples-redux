import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL_API = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  state: "idle", // idle | succeeded | loading | failed
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(BASE_URL_API);
    return response.data;
  } catch (error) {
    return error.message ?? `ERROR_TO_REQUEST ${BASE_URL_API}`;
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;

export const {} = userSlice.actions;

export const selectUsers = (state) => state.users.users;
