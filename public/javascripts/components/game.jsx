import React from "react";

export default class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      playerTurn: true
      boardState: [["","",""],["","",""],["","",""]]
    };
  }
  render() {
    return (
      <div className="box">
	<div className="board">
	  <div id="top-row" className="board-row">
	    <div className="text-center square col-xs-4">{this.state}</div>
	    <div className="text-center square col-xs-4"></div>
	    <div className="text-center square col-xs-4"></div>
	  </div>
	  <div id="middle-row" className="board-row">
	    <div className="text-center square col-xs-4"></div>
	    <div className="text-center square col-xs-4"></div>
	    <div className="text-center square col-xs-4"></div>
	  </div>
	  <div id="botton-row" className="board-row">
	    <div className="text-center square col-xs-4"></div>
	    <div className="text-center square col-xs-4"></div>
	    <div className="text-center square col-xs-4"></div>
	  </div>
	</div>
      </div>
    );
  }
}
