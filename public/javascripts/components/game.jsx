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
    if(board[row][column] == "" && playerTurn == true){
	board[row][column] = this.state.playerPiece;
	this.setState({board: board, playerTurn: false});
        //Allow Computer a Turn
    } else {
	//Display an Error Message, You can't click this now...
    }
  }
  computerTurn(){

  }
  //Returns true on already won, returns piece if win possible, otherwise returns false
  checkLeftDiagonal(piece){
  /*TODO*/
    var n = 0;
    var board = this.state.board;
    var one = board[0][0];
    var two = board[1][1];
    var three = board[2][2];
    if(one !== piece || ""){return false}
    if(two !== piece || ""){return false}
    if(two !== piece || ""){return false}
    if(one == piece){n++}
    if(two == piece){n++}
    if(three == piece){n++}
    if(n == 1){return false}
    if(n == 2){/*TODO*/}//Get the blank space number
    if(n == 3){return true}
    
  }
  checkLeftDiagonal(){
  /*TODO*/
  }
  //Returns True if already won, otherwise returns a row, col pair
  checkDiagonals(){
  /*TODO*/
  }
  //Already Won Returns True, possible win returns number, else returns false
  checkOneRow(row, piece){
    var n = 0;
    for(var j = 0; j < 3 ;j++){
	if(row[j] !== piece || row[j] !== ""){
	  return false;
        }
	else if(row[j] == piece){
	  n++;
        }
    }
    if(n == 1){return false}
    if(n == 2){/*TODO*/}//get the number of the blank box
    if(n == 3){return true}
  }
  //Already Won Returns True, possible win returns number, else returns false
  checkOneColumn(column, piece){
    var board = this.state.board;
    var n = 0;
    for(var j = 0; j < 3; j++){
	if(board[j][column] !== piece || board[j][column] !== ""){
	  return false;
        }
	else if(board[j][column] == piece){
	  n++;
        }
    }
    if(n == 1){return false}
    if(n == 2){/*TODO*/}//return number of blank box
    if(n == 3){return true}
  }
  //Return row,col pair if a winning move can be taken, else returns false
  computerCheckColumnsForWin(){
    for(var i = 0; i<3;i++){
	var result = checkOneColumn(i, this.state.computerPiece);
        if(result !== true && result !== false){
	  return {row: result, column: i};
        }
    }
  }
  //Returns row,col pair if a winning move can taken, else returns false
  computerCheckRowsForWin(){
    var board = this.state.board;
    for(var i = 0; i < 3; i++){
      var result = checkOneRow(board[i], this.state.computerPiece);
      if(result !== true && result !== false){
	return {row: i, column: result};
      }
    }
    return false;
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
