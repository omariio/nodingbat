Template.well.helpers({
exerciseLink: function(){
  var exercises = Posts.find().fetch();
  return exercises;
}
});
