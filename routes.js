Router.route('/profile', function() {
  this.render('profile');
});

Router.route('/:_section/:_name', function () {
  this.render('exerciseItem');
});

Router.route('/:_section', function () {
  this.render('exerciseSection');
});

Router.route("/", function() {
	this.render("exerciseList");
});

Router.route('/:_section/_:name/:_id', {
  name: 'postPage',
  waitOn: function() {
    return [
      Meteor.subscribe('singlePost', this.params._id),
      Meteor.subscribe('comments', this.params._id)
    ];
  },
  data: function() { return Posts.findOne(this.params._id); }
});

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('exercises'); }
});
