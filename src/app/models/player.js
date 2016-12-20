import Board from 'app/models/board';
import Backbone from 'backbone';


const Player = Backbone.Model.extend({
  initialize: function() {
  this.set("player1", "X");
  this.set("player2", "O");
  this.set("currentPlayer", this.get("player1"));
  this.game = new Board();
},

  play: function(selection) {
  if (this.game.validMove(selection, this.get("currentPlayer")) === false) {
    return;
  }

  // render?

  if (this.game.checkWin()){
    this.set("currentPlayer", this.get("player1"));
    return;
  }
  if (this.game.checkDraw()){
    this.set("currentPlayer", this.get("player1"));
    return;
  }

  if (this.get("currentPlayer") == this.get("player1")) {
    this.set("currentPlayer", this.get("player2"));
  } else {
    this.set("currentPlayer", this.get("player1"));
  }
}
});




export default Player;
