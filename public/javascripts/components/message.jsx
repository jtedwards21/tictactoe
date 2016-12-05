import React from "react";

export default class Message extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
　　　 var color = this.props.color;
    var messageStyle = {color: color};

    return (
      <div className=" text-center message-container">
        <div className="message">{this.props.message}</div>
      </div>
    );
  }
}
