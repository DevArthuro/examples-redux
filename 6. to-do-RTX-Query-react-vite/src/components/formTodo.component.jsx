import { Formik, Form } from "formik";
import { useAddTodoMutation } from "../api/todos/apiSlice";

const FormTodo = () => {
  const [addTodo] = useAddTodoMutation();

  const initialValues = {
    title: "",
    completed: false,
    userId: 1,
  };

  const sendNewTodo = (todo) => {
    addTodo(todo);
  };

  return (
    <div>
      <Formik
        onSubmit={(values, actions) => {
          sendNewTodo(values);
          actions.resetForm({
            values: {
              ...initialValues,
            },
          });
        }}
        initialValues={initialValues}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <input
                name="title"
                defaultValue={values.title}
                value={values.title}
                onChange={handleChange}
              />
              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormTodo;
