import React from "react";
import Message from "./message";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      canClick: true,
      board: [["","",""],["","",""],["","",""]],
      playerPiece: 'X',
      computerPiece: 'O',
      message: "",
      messageColor: ""
    };
  }
  resetGame(that){
    window.setTimeout(function(){that.setState({board: [["","",""],["","",""],["","",""]]});}, 1000);
  }
  handleClick(e){
    console.log(e.target.id);
    var row = e.target.id.split(',')[0];
    var column = e.target.id.split(',')[1];
    var board = this.state.board;
    if(board[row][column] == "" && this.state.canClick == true){
	board[row][column] = this.state.playerPiece;
	this.setState({board: board});
        if(this.checkPlayerWin()){	  
	  this.displayMessage("You Win!","green");
          var that = this;
	  this.resetGame(that);
	
	}
	if(this.checkTie()){	  
	  this.displayMessage("A Tie!","black");
	  this.setState({board: [["","",""],["","",""],["","",""]]});
	}
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
  }
  //find which side is blank, else return false
  computerCheckSides(){
    var board = this.state.board;
    if(board[0][1] == ""){return {row: 0, column:1}} else {
      if(board[2][1] == ""){return {row: 2, column:1}} else {
	if(board[1][0] == ""){return {row: 1, column:0}} else {
	  if(board[1][3] == ""){return {row: 1, column:3}} else {
		return false;
	  }
        }
      }
    }
  }
  //if there's a win reset the game and display a mesage
  checkPlayerWin(){
    var r = this.playerCheckRowsForWin();
    var c = this.playerCheckColumnsForWin();
    var d = this.playerCheckDiagonalsForWin();
    if(r) {return true} else {
	if (c) {return true } else {
	  if (d) {return true} else {
		return false;
  	  }
        }
    }
  }
  //Return true if there's a tie, false if not
  checkTie(){
    var board = this.state.board;
    for(var i = 0; i < 3;i++){
        var row = board[i];
	for(var j = 0; j < 3;j++){
	  if(row[j] == ""){
	  return false;
	  }
        }
    }
    return true;
  }
  displayMessage(message, color){
  this.setState({message: message, color: color});
  //Blink the Message
  }
  //At the beginning of computer turn should check for player win
  computerTurn(){
    console.log('computerTurn');
    var d = this.computerCheckDiagonalsForWin();
    var r = this.computerCheckRowsForWin();
    var c = this.computerCheckColumnsForWin();
    var center = this.computerCheckCenter();
    var corner = this.computerCheckCorners();
    var sides = this.computerCheckSides();
    if(d){
this.computerMove(d);
this.displayMessage("You Lose!","red");
this.setState({board: [["","",""],["","",""],["","",""]]});
} else { 
      if(r){
this.computerMove(r)
this.displayMessage("You Lose!","red");
this.setState({board: [["","",""],["","",""],["","",""]]});
} else {
        if(c){
this.computerMove(c)
this.displayMessage("You Lose!","red");
this.setState({board: [["","",""],["","",""],["","",""]]});
} else {
	  if(center){
this.computerMove(center)
if(this.checkTie()){

		  
this.displayMessage("A Tie!","black");
this.setState({board: [["","",""],["","",""],["","",""]]});
		  
		}
} else {
	    if(corner){
this.computerMove(corner)
if(this.checkTie()){
		  
this.displayMessage("A Tie!","black");
this.setState({board: [["","",""],["","",""],["","",""]]});
		  
		}
} else {
		this.computerMove(sides);
		if(this.checkTie()){
		  
this.displayMessage("A Tie!","black");
this.setState({board: [["","",""],["","",""],["","",""]]});
		  
		}
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
    if(one !== piece && one !== ""){return false}
    if(two !== piece && two !== ""){return false}
    if(three !== piece && three !== ""){return false}
    if(one == piece){n++}
    if(two == piece){n++}
    if(three == piece){n++}
    if(n == 0){return false}
    if(n == 1){return false}
    if(n == 2){if(one == ""){return {row: 0, column: 0}} else {
if(two == ""){return {row: 1, column: 1}} else {
return {row: 2, column: 2}
}
}}
    if(n == 3){return "win"}
    
  }
  //Returns true on already won, returns piece if win possible, otherwise returns false
  checkRightDiagonal(piece){
  var n = 0;
    var board = this.state.board;
    var one = board[0][2];
    var two = board[1][1];
    var three = board[2][0];
    if(one !== piece && one !== ""){return false}
    if(two !== piece && two !== ""){return false}
    if(three !== piece && three !== ""){return false}
    if(one == piece){n++}
    if(two == piece){n++}
    if(three == piece){n++}
    if(n == 0){return false}
    if(n == 1){return false}
    if(n == 2){if(one == ""){return {row: 0, column: 2}} else {
if(two == ""){return {row: 1, column: 1}} else {
return {row: 2, column: 0}
}
}}
    if(n == 3){return "win"}
  }
  playerCheckDiagonalsForWin() {
    var right = this.checkRightDiagonal(this.state.playerPiece);
    var left = this.checkLeftDiagonal(this.state.playerPiece);
    if(right == "win"){
	return true;
    } else {
	if(left == "win"){
	  return true;
	} else {
	  return false;
	}
    }
  }
  //Return row,col pair if a winning move can be taken, else returns false
  computerCheckDiagonalsForWin(){
    var right = this.checkRightDiagonal(this.state.computerPiece);
    var left = this.checkLeftDiagonal(this.state.computerPiece);
    if(right.row !== undefined){
	return right;
    } else {
	if(left.row !== undefined){
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
	if(row[j] !== piece && row[j] !== ""){
	  return false;
        }
	if(row[j] == piece){
	  n++;
        }
    }
    if(n == 0){return false}
    if(n == 1){return false}
    if(n == 2){
		for(var i = 0; i < 3; i++){
	if(row[i] == ""){return i;}
}
}
    if(n == 3){return "win"}
  }
  //Already Won Returns True, possible win returns number, else returns false
  checkOneColumn(column, piece){
    var board = this.state.board;
    var n = 0;
    for(var j = 0; j < 3; j++){
	if(board[j][column] !== piece && board[j][column] !== ""){
	  return false;
        }
	if(board[j][column] == piece){
	  n++;
        }
    }
    if(n == 0){return false}
    if(n == 1){return false}
    if(n == 2){
		for(var i = 0; i < 3; i++){
		  if(board[i][column] == ""){return i}
		}
}
    if(n == 3){return "win"}
  }
  playerCheckRowsForWin(){
    var board = this.state.board;
    for(var i = 0; i < 3; i++){
      var result = this.checkOneRow(board[i], this.state.playerPiece);
      if(result == "win"){
	return true;
      }
    }
    return false;
  }
  //Return True if Player has won, else return false;
  playerCheckColumnsForWin(){
    for(var i = 0; i<3;i++){
	var result = this.checkOneColumn(i, this.state.playerPiece);
        if(result == "win"){
	  return true;
        }
    }
    return false;
  }
  //Return row,col pair if a winning move can be taken, else returns false
  computerCheckColumnsForWin(){
    for(var i = 0; i<3;i++){
	var result = this.checkOneColumn(i, this.state.computerPiece);
        if(typeof(result) == "number"){
	  return {row: result, column: i};
        }
    }
    return false;
  }
  //Returns row,col pair if a winning move can taken, else returns false
  computerCheckRowsForWin(){
    var board = this.state.board;
    for(var i = 0; i < 3; i++){
      var result = this.checkOneRow(board[i], this.state.computerPiece);
      if(typeof(result) == "number"){
	return {row: i, column: result};
      }
    }
    return false;
  }
  render() {

    var squareStyle;

    if (this.state.playerTurn = true){squareStyle = {cursor: "pointer"};} else {squareStyle = {cursor: "unset"};}

    var message;
    if (this.state.message !== ""){
	message = <Message message={this.state.message} color={this.state.messageColor} />
    }

    return (
      <div id="box" className="box">
	<div className="board">
	  <div id="top-row" className="board-row col-xs-12">
	    <div><div style={squareStyle}　id="0,0" className="text-center square col-xs-4" onClick={this.handleClick.bind(this)}>{this.state.board[0][0]}</div></div>
	    <div><div style={squareStyle}　id="0,1" className="text-center square col-xs-4" onClick={this.handleClick.bind(this)}>{this.state.board[0][1]}</div></div>
	    <div><div style={squareStyle}　id="0,2" className="text-center square col-xs-4" onClick={this.handleClick.bind(this)}>{this.state.board[0][2]}</div></div>
	  </div>
	  <div id="middle-row" className="board-row col-xs-12">
	    <div><div style={squareStyle}　id="1,0" className="text-center square col-xs-4" onClick={this.handleClick.bind(this)}>{this.state.board[1][0]}</div></div>
	    <div><div style={squareStyle}　id="1,1" className="text-center square col-xs-4" onClick={this.handleClick.bind(this)}>{this.state.board[1][1]}</div></div>
	    <div><div style={squareStyle}　id="1,2" className="text-center square col-xs-4" onClick={this.handleClick.bind(this)}>{this.state.board[1][2]}</div></div>
	  </div>
	  <div id="bottom-row" className="board-row col-xs-12">
	    <div><div style={squareStyle}　id="2,0" className="text-center square col-xs-4"　onClick={this.handleClick.bind(this)}>{this.state.board[2][0]}</div></div>
	    <div><div style={squareStyle}　id="2,1" className="text-center square col-xs-4"　onClick={this.handleClick.bind(this)}>{this.state.board[2][1]}</div></div>
	    <div><div style={squareStyle}　id="2,2" className="text-center square col-xs-4"　onClick={this.handleClick.bind(this)}>{this.state.board[2][2]}</div></div>
	  </div>
	</div>
	<ReactCSSTransitionGroup
          transitionName="message"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {message}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
