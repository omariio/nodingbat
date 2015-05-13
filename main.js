if (Meteor.isClient) {
Meteor.subscribe('exercises');
Meteor.subscribe('allUserData');

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY",
});

Template.layout.helpers({
  exerciseLink: function(){
		var exercises = Exercises.find().fetch();
		return exercises;
	}
});
}
