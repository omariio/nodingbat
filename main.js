if (Meteor.isClient) {

Meteor.subscribe('exercises');
Meteor.subscribe('posts');
Meteor.subscribe('comments');
Meteor.subscribe('allUserData');

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
