Template.postPage.helpers({
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
