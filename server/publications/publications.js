// on the server
Meteor.publish('exercises', function() {
  return Exercises.find();
});
