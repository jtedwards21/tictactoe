import React from "react";

export default class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      playerTurn: true
      board: [["","",""],["","",""],["","",""]]
      playerPiece: 'X',
      computerPiece: 'O',
    };
  }
  handleClick(row, column){
    var board = this.state.board;
    if(board[row][column] == ""){
	board[row][column] = this.state.playerPiece;
	this.setState({board: board});
    }
  }
  
  render() {

    var squareStyle;

    if (this.state.playerTurn = true){squareStyle = {cursor: "pointer"};} else {squareStyle = {cursor: "unset"};}

    return (
      <div className="box">
	<div className="board">
	  <div id="top-row" className="board-row">
	    <div style={squareStyle} className="text-center square col-xs-4" onClick={this.handleClick(0,0)}>{this.state.board[0][0]}</div>
	    <div style={squareStyle} className="text-center square col-xs-4" onClick={this.handleClick(0,1)}>{this.state.board[0][1]}</div>
	    <div style={squareStyle} className="text-center square col-xs-4" onClick={this.handleClick(0,2)}>{this.state.board[0][2]}</div>
	  </div>
	  <div id="middle-row" className="board-row">
	    <div style={squareStyle} className="text-center square col-xs-4" onClick={this.handleClick(1,0)}>{this.state.board[1][0]}</div>
	    <div style={squareStyle} className="text-center square col-xs-4" onClick={this.handleClick(1,1)}>{this.state.board[1][1]}</div>
	    <div style={squareStyle} className="text-center square col-xs-4" onClick={this.handleClick(1,2)}>{this.state.board[1][2]}</div>
	  </div>
	  <div id="botton-row" className="board-row">
	    <div style={squareStyle} className="text-center square col-xs-4"　onClick={this.handleClick(2,0)}>{this.state.board[2][0]}</div>
	    <div style={squareStyle} className="text-center square col-xs-4"　onClick={this.handleClick(2,1)}>{this.state.board[2][1]}</div>
	    <div style={squareStyle} className="text-center square col-xs-4"　onClick={this.handleClick(2,2)}>{this.state.board[2][2]}</div>
	  </div>
	</div>
      </div>
    );
  }
}
