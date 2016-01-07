FlowRouter.route('/', {
  name: "home",
  subscriptions: function (params, queryParams) {
        this.register('exercises', Meteor.subscribe('exercises'));
        // console.log("params: ", params);
        // console.log("queryParams: ", queryParams);
  },
  action: function (params, queryParams) {
      BlazeLayout.render('layout', {
        top: 'header',
        main: 'landing',
        footer: 'footer'
      });
}
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('notFound', {
      top: "header",
      main: "notFound",
      footer: "footer"
    });
    console.log("not found");
  }
};

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');


FlowRouter.route('/profile/:username', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  subscriptions: function (params, queryParams) {
    this.register('user', Meteor.subscribe('users'));
  },
  action: function(params, queryParams) {
    var username = Meteor.users.findOne({username: FlowRouter.current().params.username});

    if(username != undefined){
      BlazeLayout.render('profile', { top: 'header', main: 'bats' });
    }
    // else{
    //     BlazeLayout.render('signIn', { top: 'header', main: 'bats' });
    //   }
  }
});

FlowRouter.route('/exercises', {
    subscriptions: function(params, queryParams) {
        this.register('exerciseList', Meteor.subscribe('exercises'));
    },
    action: function (params, queryParams) {
      BlazeLayout.render('exerciseList', { top: 'header', main: 'exerciseList', footer: 'footer' });
    }
});

FlowRouter.route('/exercises/:section', {
    subscriptions: function(params, queryParams) {
        this.register('exerciseSection', Meteor.subscribe('exercises', params.section));
    },
    action: function (params, queryParams) {
      BlazeLayout.render('exerciseSection', { top: 'header', main: 'exerciseSection', footer: 'footer' });
    }
});

FlowRouter.route('/exercises/:section/:name', {
    subscriptions: function(params, queryParams) {
        this.register('exerciseItem', Meteor.subscribe('exercises', params.name));
    },
    action: function (params, queryParams) {
      BlazeLayout.render('exerciseItem', { top: 'header', main: 'sidebar', footer: 'footer' });
    }
});

FlowRouter.route('/forum', {
    subscriptions: function(params, queryParams) {
        this.register('postPage', Meteor.subscribe('posts', params.name));
    },
    action: function (params, queryParams) {
      BlazeLayout.render('postPage', { top: 'header', main: 'postPage', footer:'footer' });
    }
});


FlowRouter.route('/forum/:section/:name', {
    subscriptions: function(params, queryParams) {
        this.register('exerciseItem', Meteor.subscribe('exercises', params.name));
    },
    action: function (params, queryParams) {
      BlazeLayout.render('postItem', { top: 'header', main: 'postItem', footer:'footer' });
    }
});
