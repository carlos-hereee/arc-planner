import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="page-not-found">
      <h2>404 Page Not Found</h2>
      <div className="wrapper">
        <Link to="/">Home</Link>
      </div>
    </main>
  );
};

export default PageNotFound;
