import React from "react";

export default class Square extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {

    
    var squareStyle = {cursor: "pointer"}

    return (
      <div style={squareStyle}　id={this.props.id} className="text-center square col-xs-4" onClick={this.props.method}>{this.props.content}</div>
    );
  }
}
