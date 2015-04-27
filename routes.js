// Router.route('/solutions/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });

Router.route("/splash", function() {
	this.render("splash");
});
Router.route("/", function() {
	this.render("codeEditor");
});
Router.configure({
  layoutTemplate: 'layout'
});