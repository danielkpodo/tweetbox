import React from "react";

function Avatar(props) {
  const { hash } = props;
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} alt="my gravatar" className="avatar" />;
}

export default Avatar;
