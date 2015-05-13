Template.sidebar.helpers({
	exercise:function(){
		var name = Router.current().params._name;
		var exercise = Exercises.findOne({name:name});
		return exercise;
	},
  exerciseForum: function(){
    return Session.get('exerciseForum');
  },
	success: function(){
		return Session.get('success');
	},
	failure: function(){
		return Session.get('failure');
	}
});

var abiShake = function(){
	var currentDiv = $('h1.animated').removeClass('shake');
	currentDive.addClass('shake');
}
