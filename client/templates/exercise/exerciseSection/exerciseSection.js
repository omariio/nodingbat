Template.exerciseSection.helpers({
  exercises: function() {
  	return Exercises.find({section: Router.current().params._section});
  }
});
