import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="notfound-container">
      <div>
        

        <Link to={"/"}>
          <p className="button">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
