import React, { Component } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Message from "./components/Message";
import NameWithHandle from "./components/NameWithHandle";
import Time from "./components/Time";
import ReplyButton from "./components/ReplyButton";
import RetweetButton from "./components/RetweetButton";
import LikeButton from "./components/LikeButton";
import MoreOptionsButton from "./components/MoreOptionsButton";
class App extends Component {
  render() {
    const { tweet } = this.props;
    return (
      <div className="tweet">
        <Avatar hash={tweet.gravatar} />
        <div className="content">
          <Message text={tweet.message} />
          <NameWithHandle author={tweet.author} />
          <Time time={tweet.timestamp} />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton count={tweet.retweets} />
            <LikeButton count={tweet.likes} />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
