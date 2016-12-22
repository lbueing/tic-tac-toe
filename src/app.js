import $ from 'jquery';
import Player from 'app/models/player';
import PlayerView from 'app/views/player_view';


$(document).ready(function() {
  var playerView = new PlayerView();
  playerView.render();
});
