Router.route('/solutions/:_id', function () {
  var item = Items.findOne({_id: this.params._id});
  this.render('ShowItem', {data: item});
});

Router.route("/", function() {
	this.render("exercise");
});

Router.configure({
  layoutTemplate: 'layout'
});