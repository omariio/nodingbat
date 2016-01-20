Template.exerciseList.helpers({
  currentUser: function() {
    user = Meteor.user();
    if(user != null){
      return user.username;
    }
  },
  exercises: function() {
    return Exercises.find({}, { sort:{ section: -1 }});
  },
  user: function() {
    return Meteor.user();
  },
  distinctSection: function() {
    var distinctEntries = _.uniq(Exercises.find({}, { sort: {'section':1}, fields:{'section':1}}).fetch()
    .map(function(x){
      return x.section;
    }), true);
    return distinctEntries;
  }
});

Template.exerciseList.rendered = function() {
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
