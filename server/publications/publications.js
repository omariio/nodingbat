// on the server
Meteor.publish('exercises', function() {
  return Exercises.find();
});

Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});
