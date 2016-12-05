import React from "react";

export default class Message extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {

    var messageStyle = {color: {this.props.color}};

    return (
      <div className="message-container">
        <div className="message">{this.props.message}</div>
      </div>
    );
  }
}
