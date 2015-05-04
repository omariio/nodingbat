Template.postSection.helpers({
  posts: function() {
  	return Posts.find({section: Router.current().params._section});
  }
});