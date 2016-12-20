// import Board from 'board';
//
//
//
// var Player = function() {
//   this.player1 = "X";
//   this.player2 = "O";
//   this.currentPlayer = this.player1;
//   this.game = new Board();
// };
//
// Player.prototype.play = function(selection) {
//   if (this.game.validMove(selection, this.currentPlayer) === false) {
//     return;
//   }
//
//   this.game.print();
//
//   if (this.game.checkWin()){
//     this.game.clearBoard();
//     console.log("A new game has been started!");
//     this.currentPlayer = this.player1;
//     return;
//   }
//   if (this.game.checkDraw()){
//     this.game.clearBoard();
//     console.log("A new game has been started!");
//     this.currentPlayer = this.player1;
//     return;
//   }
//
//   // console.log('\n' +
//   //     ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] + '\n' +
//   //     ' ---------\n' +
//   //     ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] + '\n' +
//   //     ' ---------\n' +
//   //     ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9] + '\n');
//   if (this.currentPlayer == this.player1) {
//     this.currentPlayer = this.player2;
//   } else {
//     this.currentPlayer = this.player1;
//   }
// };
//
//
//
//
//
// export default Player;
// // sock = new Board();
// // socks.play('X')
