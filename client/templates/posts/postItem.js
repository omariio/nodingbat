
Template.postItem.helpers({
  posts: function() {
    return Posts.find();
  },
  exerciseName: function() {
    return FlowRouter.current().params.name;
  },
  sectionName: function() {
    return FlowRouter.current().params.section;
  },
  currentUser: function() {
    return Meteor.user();
  },
  getComments: function() {
    var routeName = FlowRouter.current().params.name;
    return Comments.find({exerciseName: routeName});
  }
});

Template.postItem.events({
  "click #foo": function(event, template){

  },
  'click #commentBtn': function(){

    // Session_set("modal", true);
    // Meteor.call(CommentInser())
  },
  'click .close': function() {
    $('#modal1').closeModal();
  },
  'click #comment-area': function() {
    $('#modal1').openModal();
  },
  'click #submit': function() {
    var text = $('textarea').val();
    Meteor.call('addComment', text,  Meteor.user(), FlowRouter.current().params.name);
    var text = $('textarea').val('');
  }
});

Template.postItem.rendered = function() {
  // $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  $('#aside').pushpin({ top:110, bottom:500 });
}
