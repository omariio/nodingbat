if (Meteor.isClient) {
  Meteor.subscribe('posts');

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY",
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        validate: function(value, errorFunction){
          if (value != 'true') {
            errorFunction("You must accept the terms and conditions.");
            return false;
          } else {
            return true;
          }
        },
        saveToProfile: false
    }]
});

}
