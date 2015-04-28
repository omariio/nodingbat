if (Meteor.isClient) {
  Meteor.subscribe('posts');
// At the bottom of the client code
Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
}



