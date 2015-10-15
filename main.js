if (Meteor.isClient) {
Meteor.subscribe('exercises');
Meteor.subscribe('allUserData');

AccountsTemplates.configure({
    defaultTemplate: 'myCustomFullPageAtForm',
    defaultLayout: 'layout',
    defaultLayoutRegions: {
        top: 'top',
        main: 'main'
    },
    defaultContentRegion: 'main'
});

Template.layout.helpers({
  exerciseLink: function(){
		var exercises = Exercises.find().fetch();
		return exercises;
	}
});
}
