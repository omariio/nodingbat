Router.route('/:_name', function () {
  var item = Posts.findOne({name: this.params._name});
  console.log("route");
  console.log(item);
  if(!item)
  	this.render('notFound');
  else 
  	this.render('postItem', {data: item});
});

Router.route("/", function() {
	this.render("postList");
});
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

// Router.onBeforeAction('dataNotFound', {only: 'postList'});
