import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todosApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["TODO"], // Cache
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["TODO"], // Reference
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["TODO"], // Delete and update cache
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["TODO"], // Delete and update cache
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => {
        console.log(id);
        return {
          url: `/todos/${id}`,
          method: "DELETE",
          body: { id },
        };
      },
      invalidatesTags: ["TODO"], // Delete and update cache
    }),
  }),
});

export default todosApiSlice;

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApiSlice;
