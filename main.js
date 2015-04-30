if (Meteor.isClient) {
  Meteor.subscribe('posts');

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY",
});

Template.layout.helpers({
  exerciseLink: function(){
		var exercises = Posts.find().fetch();
		return exercises;
	}
});

}
