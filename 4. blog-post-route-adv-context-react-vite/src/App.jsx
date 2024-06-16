import Layout from "./common/Layout";
import FormPost from "./pages/formPost";
import ListPosts from "./pages/listPosts";

import { Routes, Route } from "react-router-dom";
import PostDetails from "./pages/postDetails";
import EditFormPost from "./pages/editFormPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ListPosts />} />

        <Route path="post">
          <Route index element={<FormPost />} />
          <Route path=":postId" element={<PostDetails />} />
          <Route path="edit/:postId" element={<EditFormPost />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
