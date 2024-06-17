import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import SelectUserField from "../components/selectUserField";
import { editPost, selectPostById } from "../store/slices/posts";
import { useNavigate, useParams } from "react-router-dom";

const EditFormPost = () => {
  const dispatch = useDispatch();

  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  const navigate = useNavigate();

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  const editFormPost = (valuesPost) => {
    dispatch(editPost({ ...post, ...valuesPost }));
    navigate(`/post/${postId}`);
  };

  const initialValues = {
    title: post.title,
    userId: post.userId,
    body: post.body,
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, _) => {
          editFormPost({ ...values, userId: Number(values.userId) });
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
              <label htmlFor="userId">Author</label>
              <SelectUserField name="userId" />
              <br />
              <label htmlFor="body">body</label>
              <textarea
                name="body"
                value={values.body}
                id="body"
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
export default EditFormPost;
