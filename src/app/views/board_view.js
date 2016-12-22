import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var BoardView = Backbone.View.extend( {
  initialize: function() {
    console.log(">>> BREADCRUMBS: #3");
    this.render();
  },

  render: function() {
    console.log(">>> BREADCRUMBS: #4");
    const spaceList = Backbone.$('.large-4');
    spaceList.empty();

    const self = this;
    console.log(this);
    // this.model.forEach(function(space) {
    //   const card = new SpaceView({
    //     model: space
    //   });
    //   self.listenTo(card, 'select', self.showDetails);
    //
    //   spaceList.append(card.render().$el);
    // });
  }
}); //end of view

export default BoardView;
