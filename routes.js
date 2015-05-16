// Router.route('/:_section/:_name/:_title', function () {
//   this.postList('postList', {
//     data: function() {
//       return Posts.findOne({_title: this.params._title});
//     }
//   })
// });

Router.route('/:_section/:_name', function () {
  this.render('exerciseItem');
});

Router.route('/:_section', function () {
  this.render('exerciseSection');
});

Router.route("/", function() {
	this.render("exerciseList");
});


Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('exercises'); }
});
