import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Albert Ainstain" },
  { id: 1, name: "German Castro" },
  { id: 2, name: "Gabriel Garcia" },
  { id: 3, name: "Stephen King" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

export const {} = userSlice.actions;

export const selectUsers = (state) => state.users;
