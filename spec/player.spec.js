import Player from 'app/models/player';

describe('Player', function() {
  describe('initialize', function() {
    it('should create two new palyers', function() {
      var players = new Player();
      expect(players.get("player1")).toBeDefined();
    });
    it('should create two new palyers', function() {
      var players = new Player();
      expect(players.get("player2")).toBeDefined();

    });
  });
  describe('play', function() {
    it('should mark spot with X or O', function() {
      var players = new Player();
      players.play(5);
      players.play(1);
      players.play(4);
      players.game.get("board")[6] = 'X';
  expect(players.game.get("board")[6]).toEqual('X');
    });
  });
  // describe('clearBoard', function() {
  //   it('should remove all marks from board', function() {
  //
  //   });
  // });
  // describe('exitGame', function() {
  //   it('should end game', function() {
  //
  //   });
  // });
  // describe('validMove', function() {
  //   it('should check to see if spot alrady contains X or O', function() {
  //
  //   });
  // });
});//end of board
