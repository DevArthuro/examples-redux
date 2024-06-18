import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 15px",
        }}
      >
        <div>
          <h1>Blog Redux</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
          <Link to={`/`}>Ir al inicio</Link>
          <Link to={`/post`}>Create post</Link>
          <Link to={`/user`}>Watch users</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
