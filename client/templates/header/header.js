Template.header.helpers({
  username: function(){
  	return Meteor.users.findOne().username;
  },
  section: function(){
  	return Meteor.exercises.find({section: section});
  }
});

Template.header.rendered=function(){
};
