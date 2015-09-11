Template.well.helpers({
exerciseLink: function(){
  var exercises = Exercises.find().fetch();
  return exercises;
}
});
