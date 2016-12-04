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
        //checkForPlayerWin
	//checkFOrTie
	this.computerTurn();
    } else {
	//Display an Error Message, You can't click this now...
    }
  }
  computerMove(loc){
    var board = this.state.board;
    board[loc.row][loc.column] = this.state.computerPiece;
  }
  computerCheckCenter() {
    var board = this.state.board;
    if(board[1][1] == ""){return {row: 1, column:1}} else {
	return false;
    }
  }
  computerCheckCorners(){
　　  var board = this.state.board;
    if(board[0][0] == ""){return {row: 0, column:0}} else {
      if(board[2][2] == ""){return {row: 2, column:2}} else {
	if(board[2][0] == ""){return {row: 2, column:0}} else {
	  if(board[0][2] == ""){return {row: 0, column:2}} else {
		return false;
        }
      }
    }
  }
  //if there's a win reset the game and display a mesage
  checkPlayerWin(){
    /*TODO*/
  }
  //If there's a tie reset the game and display a message
  checkTie(){
  /*TODO*/
  }
  //At the beginning of computer turn should check for player win
  computerTurn(){
    var d = this.computerCheckDiagonalsForWin();
    var r = this.computerCheckRowsForWin();
    var c = this.computerCheckColumnsForWin();
    var center = this.computerCheckCenter();
    var corner = this.computerCheckCorners();
    if(d){this.computerMove(d)} else { //Add computer win message
      if(r){this.computerMove(r)} else {//Add computer win message
        if(c){this.computerMove(c)} else {//Add computer win message
	  if(center){this.computerMove(center)} else {//Add tie check
	    if(corner){this.computerMove(corner)} else {//Add tie check
		//Move to sides
		//Add tie check
            }
          }
        }
      }
    }
  }
  //Returns true on already won, returns piece if win possible, otherwise returns false
  checkLeftDiagonal(piece){
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
    if(n == 2){if(one == ""){return {row: 0, column: 0}} else {
if(two == ""){return {row: 1, column: 1}} else {
return {row: 2, column: 2}
}
}}
    if(n == 3){return true}
    
  }
  //Returns true on already won, returns piece if win possible, otherwise returns false
  checkRightDiagonal(piece){
  var n = 0;
    var board = this.state.board;
    var one = board[0][2];
    var two = board[1][1];
    var three = board[2][0];
    if(one !== piece || ""){return false}
    if(two !== piece || ""){return false}
    if(two !== piece || ""){return false}
    if(one == piece){n++}
    if(two == piece){n++}
    if(three == piece){n++}
    if(n == 1){return false}
    if(n == 2){if(one == ""){return {row: 0, column: 2}} else {
if(two == ""){return {row: 1, column: 1}} else {
return {row: 2, column: 0}
}
}}
    if(n == 3){return true}
  }
  
  //Return row,col pair if a winning move can be taken, else returns false
  computerCheckDiagonalsForWin(){
    var right = this.checkRightDiagonal(this.state.computerPiece);
    var left = this.checkLeftDiagonal(this.state.computerPiece);
    if(right !== false && right !== true){
	return right;
    } else {
	if(left !== false && left !== true){
	  return left;
	} else {
	  return false;
	}
    }
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
    if(n == 2){
		for(var i = 0; i < 3; i++){
	if(row[i] == ""){return i;}
}
}
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
    if(n == 2){
		for(var i = 0; i < 3; i++){
		  if(board[i][column] == ""){return i}
		}
}
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
