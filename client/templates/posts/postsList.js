Template.postList.helpers({
  posts: function() {
    return Posts.find();
  }
});