import React from "react";

const RetweetButton = props => {
  const { count } = props;
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      {count > 0 ? count : ""}
    </span>
  );
};

export default RetweetButton;
