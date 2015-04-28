Router.route('/:_name', function () {
  var item = Posts.findOne({name: this.params._name});
  console.log("route");
  console.log(item);
  if(!item)
  	this.render('broken');
  this.render('postItem', {data: item});
});

Router.route("/", function() {
	this.render("postList");
});
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }

});