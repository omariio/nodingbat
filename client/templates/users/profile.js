BlazeLayout.setRoot('body');

Template.profile.helpers({
  currentUser: function(){
    user = Meteor.user();
    return user.username;
  },
  usersBats: function(){
    var allExercises = Exercises.find().fetch();
    //var currentDiv = $("div.notAchieved:nth-child()".toggleClass( "notAchieved").html();
    console.log(user.rank);
    return Meteor.user().bats;
  },
  allBats: function(){
    return Exercises.find();
  },
  batDiff: function(){
    // var allExercises = Exercises.find().fetch();
    var usersBats = Meteor.user().bats;

    var arrayDiff = _.difference(allExercises, usersBats);
    return arrayDiff;
  },
  user: function(){
    return Meteor.user();
  },
  username: function(){
    return Meteor.user();
  }
});

Template.profile.rendered = function() {
  profileRender();
}

function profileRender() {
  var user = Meteor.user().bats;
  var domExercises = $('a.notAchieved');
  for(i=0; i<domExercises.length; i++){
    var currentEl = $(domExercises[i]);
    var text = currentEl.text();
    var textTrim = $.trim(text);
    user.forEach(function(x){
      if(x == textTrim){
        $(currentEl).removeClass("notAchieved");
        }
    });
  }
}
