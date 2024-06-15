import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { savePost } from "../store/slices/posts";
import SelectUserField from "./selectUserField";

const FormPost = () => {
  const dispatch = useDispatch();

  const saveNewPost = (post) => {
    dispatch(savePost(post));
  };

  const initialValues = {
    title: "",
    author: "",
    content: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          saveNewPost(values);
          actions.resetForm({
            values: {
              ...initialValues,
            },
          });
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={values.title}
                id="title"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="author">Author</label>
              <SelectUserField name="author" />
              <br />
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                value={values.content}
                id="content"
                onChange={handleChange}
              />
              <br />
              <button type="submit">Save</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormPost;
