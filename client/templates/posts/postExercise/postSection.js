Template.postSection.helpers({
  posts: function() {
    return Posts.find({section: 'warm-up1'});
  }
});