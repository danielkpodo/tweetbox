import React from "react";

function Message(props) {
  const { text } = props;
  return <div className="message">{text}</div>;
}

export default Message;
