import React from "react";
import { withRouter } from "react-router-dom";
import "./Photos.css";

function Photos (props) {
  return (
    <div className="photosComponent">
      <main className="photosBox">
        Photos Component       
        </main>
    </div>
  );
}

export default withRouter(Photos);