if (Meteor.isClient) {
  Meteor.subscribe('posts');

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY",
});

}
