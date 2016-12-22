import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Player from 'app/models/player';


var PlayerView = Backbone.View.extend( {
  el: '.player-view',
  initialize: function() {
    this.players = new Player();
    this.session = false;
    this.render();


  },

  events: {
    'click .large-4': 'markBoard',
    'click .new-game': 'newGame'
  },

  markBoard: function(event) {
    event.preventDefault();
    if (this.session === false) return;
    var space = event.target.id;
    var html = this.players.get("currentPlayer");
    if (this.players.game.checkWin() !== true && this.players.play(space) !== false ) {
      $('#' + space).html(html);
      var whoseTurn = "Player " + this.players.get("currentPlayer") + ", it's your turn!";
      $('.whose-turn').html(whoseTurn);
    }
    if (this.players.game.checkWin() === true) {
      var winner = "Player " + this.players.get("currentPlayer") + " is the winner!";
      $('.whose-turn').html(winner);
    }
  },

  newGame: function(event) {
    event.preventDefault();
    this.session = true;
    this.players.game.clearBoard();
    for (var i=1; i<10; i++) {
      $('#' + i).html("");
    }
    var html = "Player " + this.players.get("currentPlayer") + ", it's your turn!";
    $('.whose-turn').html(html);
  },

  render: function() {

    return this;
  }
}); //end of view

export default PlayerView;
