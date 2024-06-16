import Layout from "./common/Layout";
import FormPost from "./pages/formPost";
import ListPosts from "./pages/listPosts";

import { Routes, Route } from "react-router-dom";
import PostDetails from "./pages/postDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ListPosts />} />

        <Route path="post">
          <Route index element={<FormPost />} />
          <Route path=":postId" element={<PostDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
