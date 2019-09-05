import React from "react";
import moment from "moment";
const Time = props => {
  const timeString = moment(props.time).fromNow();
  return <span className="time">{timeString}</span>;
};

export default Time;
