Router.route('/:_name', function () {
  var item = Posts.findOne({name: this.params._name});
  console.log(item);
  this.render('postItem', {data: item});
});

Router.route("/", function() {
	this.render("postList");
});
Router.configure({
  layoutTemplate: 'layout'
});
