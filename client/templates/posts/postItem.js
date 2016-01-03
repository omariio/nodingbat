
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
  user: function(){
    return Meteor.users.findOne().username;
  },
  getComments: function() {
    var routeName = FlowRouter.current().params.name;
    return Comments.find({exerciseName: routeName}, {sort: {votes: -1}});
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    // && !_.include(this.upvoters, userId)
    if (userId) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
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
  },
  'click .upvotable': function(e) {
    e.preventDefault();
    console.log(this._id);
    Meteor.call('upvote', this._id);
  }
});

Template.postItem.rendered = function() {
}
