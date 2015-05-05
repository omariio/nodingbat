Router.route('/:_section/:_name', function () {
  this.render('postItem');
});

Router.route('/:_section', function () {
  this.render('postSection');
});


Router.route("/", function() {
	this.render("postList");
});

Router.route('/postItem/submit', {name: 'postSubmit'});

Router.route('/:_name/_id', function() {
  var p = Posts.findOne({_id: this.params._id});
  if(p)
    this.render('forum', {p_id:id});
  else
    this.render('forumNotCreated'); //else render to blank forum screen ex. "Be First...!"
})

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});
