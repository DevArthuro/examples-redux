import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../api/todos/apiSlice";

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const [updateTodo] = useUpdateTodoMutation();
  // Example to get data in the hook and actions
  const [deleteTodo, { data: deleteData, error: deleteError }] =
    useDeleteTodoMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Ocurred an error {error}</div>;
  }

  return (
    <div>
      {isSuccess && (
        <div>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => {
                    updateTodo({
                      completed: Boolean(e.target.value),
                      id: todo.id,
                    });
                  }}
                />
                <input
                  value={todo.title}
                  onChange={(e) => {
                    updateTodo({ title: e.target.value, id: todo.id });
                  }}
                />
                <button
                  onClick={() => {
                    deleteTodo({ id: todo.id });
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
