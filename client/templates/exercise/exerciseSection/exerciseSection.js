Template.exerciseSection.helpers({
  currentUser: function() {
    user = Meteor.user();
    if(user != null){
      return user.username;
    }
  },
  exercises: function() {
    return Exercises.find({'section': FlowRouter.current().params.section});
  },
  user: function() {
    return Meteor.user();
  },
  sectionCurrent: function() {
    return Exercises.findOne({'section': FlowRouter.current().params.section}).section;
  }
});

Template.exerciseSection.rendered = function() {
  if (user != null){
    exerciseRender();
  }
}

function exerciseRender() {
  var user = Meteor.user().bats;
  var domExercises = $('i.undone');
  for(i=0; i<domExercises.length; i++){
    var currentEl = $(domExercises[i]);
    var html = currentEl.html();
    user.forEach(function(x){
      if(x == html){
        $(currentEl).removeClass("undone").empty();
        }
    });
  }
}
