import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import SelectUserField from "../components/selectUserField";
import { addNewPost, getPostsStatus } from "../store/slices/posts";

const FormPost = () => {
  const dispatch = useDispatch();

  const status = useSelector(getPostsStatus);

  const saveNewPost = (post) => {
    dispatch(addNewPost(post));
  };

  const initialValues = {
    title: "",
    author: "",
    body: "",
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
              <label htmlFor="body">body</label>
              <textarea
                name="body"
                value={values.body}
                id="body"
                onChange={handleChange}
              />
              <br />
              <button type="submit" disabled={status === "loading"}>
                Save
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormPost;
