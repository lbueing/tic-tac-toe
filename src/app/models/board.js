import Player from 'app/models/player';
import Backbone from 'backbone';

const Board = Backbone.Model.extend({
  initialize: function() {
  this.set("board", {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
  });
},

checkWin: function() {
  var win = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  for (var i = 0; i < 8; i++) {
    if (this.get("board")[win[i][0]] === this.get("board")[win[i][1]] && this.get("board")[win[i][1]] === this.get("board")[win[i][2]] && this.get("board")[win[i][0]] !== ' ') {
      return true;
    }
  }
},

checkDraw: function() {
  var counter = 0;
  for (var j = 1; j < 10; j++) {
    if (this.get("board")[j] !== ' ') {
      counter += 1;
    }
  }
  if (counter == 9 && this.checkWin() !== true) {
    return true;
  } else {
    return false;
  }
},

validMove: function(selection, symbol) {
  if (this.get("board")[selection] == ' '){
    this.get("board")[selection] = symbol;
    return true;
  } else {
    return false;
  }
},

clearBoard: function() {
  for(var i = 1; i < 10; i++) {
    this.get("board")[i] = ' ';
    }
}
});


// socks = new Board();
export default Board;
