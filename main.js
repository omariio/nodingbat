if (Meteor.isClient) {
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready

Meteor.subscribe('exercises');
Meteor.subscribe('allUserData');

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'myLogin',
    layoutTemplate: 'notFound',
    layoutRegions: {
      nav: 'top',
      // footer: 'myFooter'
    },
    contentRegion: 'main'
});
AccountsTemplates.configure({
    defaultTemplate: 'myCustomFullPageAtForm',
    defaultLayout: 'layout',
    defaultLayoutRegions: {
        top: 'top',
        main: 'main'
    }
});

Template.layout.helpers({
  exerciseLink: function(){
		var exercises = Exercises.find().fetch();
		return exercises;
	}
});
}
if (Meteor.isServer) {
console.log('(ಠ益ಠ) ʟᴇᴛꜱ ɢᴇᴛ ɴᴏᴅɪɴɢ! (ﾉಥ益ಥ）ﾉ﻿ ┻━┻ !!!!!!!!!');
}
