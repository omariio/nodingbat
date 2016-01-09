Template.exerciseSection.helpers({
  currentUser: function() {
    user = Meteor.user();
    return user.username;
  },
  user: function() {
    return Meteor().user;
  },
  exercises: function() {
  	return Exercises.find({section: FlowRouter.current().params.section});
  },
  sectionCurrent: function() {
    return Exercises.find({section: FlowRouter.current().params.section, limit:1});
  }
});

Template.exerciseSection.rendered = function() {
    //  exerciseRender();
     console.log(Exercises.find({section: FlowRouter.current().params.section}));
}

// function exerciseRender() {
//   var user = Meteor.user().bats;
//   var domExercises = $('i.undone');
//   for(i=0; i<domExercises.length; i++){
//     var currentEl = $(domExercises[i]);
//     var html = currentEl.html();
//     user.forEach(function(x){
//       if(x == html){
//         $(currentEl).removeClass("undone").empty();
//         }
//     });
//   }
// }
