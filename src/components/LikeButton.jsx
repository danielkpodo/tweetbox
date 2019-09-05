import React from "react";

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart " />
      <span className="like-count">{count > 0 ? count : ""}</span>
    </span>
  );
};

export default LikeButton;
