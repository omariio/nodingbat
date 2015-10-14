FlowRouter.notFound = {
    action: function() {
      BlazeLayout.render('notFound', { top: 'header', main: 'bats' });
    }
};
FlowRouter.route('/profile/:username', {
  subscriptions: function (params, queryParams) {
    this.register('user', Meteor.subscribe('users'));
    console.log("params: ", params);
    console.log("queryParams: ", queryParams);
  },
  action: function(params, queryParams) {
    var username = Meteor.users.find({username: FlowRouter.current().params.username});
    console.log(FlowRouter.current().params.username);
      console.log("in the profile ", username);
      BlazeLayout.render('profile', { top: 'header', main: 'bats' });
  }
});

// FlowRouter.route('/profile', {
//     subscriptions: function(params, queryParams) {
//         this.register('user', Meteor.users('profile', params.username));
//         console.log("test");
//     },
//     action: function (params, queryParams) {
//       BlazeLayout.render("profile", {content: "profile"});
//       console.log("test");
//     }
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
        this.register('exerciseItem', Meteor.subscribe('exercises', params.name));
        console.log(params.name);
    },
    action: function (params, queryParams) {
      BlazeLayout.render('exerciseItem', { top: 'header', main: 'sidebar' });
    }
});

// FlowRouter.route('/blog/:postId', {
//   subscriptions: function (params, queryParams) {
//     this.register('post', Meteor.subscribe('singlePost', params.postId));
//   },
//   action: function (params, queryParams) {
//     FlowLayout.render('layout', { top: 'header', main: 'singlePost' });
//   },
//   name: 'blog'
// });

// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading',
//   notFoundTemplate: 'notFound',
//   waitOn: function() { return Meteor.subscribe('exercises'); }
// });
