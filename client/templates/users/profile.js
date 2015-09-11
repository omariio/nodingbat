Template.profile.helpers({
  currentUser: function(){
    var user = Meteor.user();
    return user.username;
  },
  usersBats: function(){
    var user = Meteor.user();
    return Meteor.user().bats;
  },
  batDiff: function(){
    var allExercises = Exercises.find().fetch();
    var usersBats = Meteor.user().bats;

    var arrayDiff = _.difference(allExercises, usersBats);
    return arrayDiff;
  },
  user: function(){
    return Meteor.user();
  }
});
