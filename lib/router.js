// Router.route('/profile', function() {
//   this.render('profile');
// });
FlowRouter.route('/', {
  subscriptions: function (params, queryParams) {
    this.register('exercises', Meteor.subscribe('exercises'));
    console.log("params: ", params);
    console.log("queryParams: ", queryParams);
  },
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { top: 'header', main: 'exerciseList' });
  },
  name: 'home'
});

FlowRouter.route('/:section/', {
    subscriptions: function(params, queryParams) {
        this.register('exerciseSection', Meteor.subscribe('exercises', params.section));
    },
    action: function (params, queryParams) {
      BlazeLayout.render('exerciseSection', { top: 'header', main: 'exerciseSection' });
    }
});

FlowRouter.route('/:section/:name', {
    subscriptions: function(params, queryParams) {
        this.register('exerciseSection', Meteor.subscribe('exercises', params.name));
        console.log(params.name);
    },
    action: function (params, queryParams) {
      BlazeLayout.render('exerciseItem', { top: 'header', main: 'sidebar' });
    }
});



// Router.route('/:_section', function () {
//   this.render('exerciseSection');
// });



// FlowRouter.route('/blog/:postId', {
//   subscriptions: function (params, queryParams) {
//     this.register('post', Meteor.subscribe('singlePost', params.postId));
//   },
//   action: function (params, queryParams) {
//     FlowLayout.render('layout', { top: 'header', main: 'singlePost' });
//   },
//   name: 'blog'
// });

// FlowRouter.route('/profile', {
//   action: function() {
//     BlazeLayout.render("profile", {content: "profile"});
//   }
// });

// var path = FlowRouter.path("/:section/", params, queryParams);


// FlowRouter.route('/:_section', {
//   action: function() {
//     BlazeLayout.render("exerciseList", {content: ":_section"});
//   }
// });

// FlowRouter.route('/:_section/:_name', {
//   action: function() {
//     BlazeLayout.render("exerciseItem", {content: ":_name"});
//   }
// });


// Router.route('/:_section/:_name', function () {
//   this.render('exerciseItem');
// });
// Router.route('/:_section/:_name/help', function () {
//   this.render('postPage');
// });


// Router.route("/", function() {
// 	this.render("exerciseList");
// });

// Router.route('/:_section/_:name/:_id', {
//   name: 'postPage',
//   waitOn: function() {
//     return [
//       Meteor.subscribe('singlePost', this.params._id),
//       Meteor.subscribe('comments', this.params._id)
//     ];
//   },
//   data: function() { return Posts.findOne(this.params._id); }
// });

// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading',
//   notFoundTemplate: 'notFound',
//   waitOn: function() { return Meteor.subscribe('exercises'); }
// });
