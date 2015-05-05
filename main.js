if (Meteor.isClient) {
Meteor.subscribe('posts');
Meteor.subscribe('allUserData');

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
