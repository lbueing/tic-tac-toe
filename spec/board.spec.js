import Board from 'app/models/board';
import Player from 'app/models/player';


describe('Board', function() {
  it('should create new empty game board', function() {
    var socks = new Board();
    for(var i = 1; i < 10; i++) {
      expect(socks.get("board")[i]).toEqual(' ');
      }
    });
  // describe('newGame', function() {
  // });
  describe('checkWin', function() {
    it('should check arrays for posible win', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
      players.game.get("board")[6] = 'X';
      console.log(players.game.get("board"));
  expect(players.game.checkWin()).toEqual(true);
    });
    it('should not return true if  player has not won yet', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
  expect(players.game.checkWin()).toBeFalsy();
    });
  });
  describe('checkDraw', function() {
    it('should check for full board w/o wins to equal draw', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
      players.play(3);
      players.play(6);
      players.play(9);
      players.play(7);
      players.game.get("board")[8] = 'X';
  expect(players.game.checkDraw()).toEqual(true);
    });
    it('should not return true if  player has not won yet', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.game.get("board")[6] = 'X';
  expect(players.game.checkDraw()).toBeFalsy();
    });
    it('should not return true if  player has won with full board', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
      players.play(3);
      players.play(6);
      players.play(9);
      players.play(8);
      players.game.get("board")[7] = 'X';
  expect(players.game.checkDraw()).toBeFalsy();
    });
  });
  describe('clearBoard', function() {
    it('should remove all marks from board', function() {
      var game = new Board();
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.play(2);
      players.play(6);
      players.game.clearBoard();
      for(var i = 1; i < 10; i++) {
        expect(players.game.get("board")[i]).toEqual(' ');
        }
      });
  });
  describe('validMove', function() {
    it('should check to see if spot already contains X or O', function() {
      var socks = new Board();
      expect(socks.validMove(5, 'X')).toEqual(true);
    });
    it('should not allow move to happen twice', function() {
      var socks = new Board();
      socks.validMove(5, 'X');
      expect(socks.validMove(5, 'O')).toEqual(false);
    });
  });
});//end of board
// comment
