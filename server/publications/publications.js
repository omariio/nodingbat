// on the server
Meteor.publish('posts', function() {
  return Posts.find();
});