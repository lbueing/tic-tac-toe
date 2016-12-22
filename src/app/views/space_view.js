import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var SpaceView = Backbone.View.extend( {
  initialize: function() {

  },

  render: function() {

  },

  events: {
    'submit .large-4': 'markBoard'
  },

  markBoard: function(event) {
    event.preventDefault();
    console.log(this.getInput());
    console.log('clicked');

  }

}); //end of view
