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
        main: 'exerciseList',
        footer: 'footer'
      });
}
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('notFound', {
      top: "header",
      main: "notFound"
    });
    console.log("not found");
  }
};

FlowRouter.route('/private', {
  name: "private",
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      top: "header",
      main: "private"
    });
  }
});

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');


FlowRouter.route('/profile/:username', {
  subscriptions: function (params, queryParams) {
    this.register('user', Meteor.subscribe('users'));
  },
  action: function(params, queryParams) {
    var username = Meteor.users.find({username: FlowRouter.current().params.username});
      BlazeLayout.render('profile', { top: 'header', main: 'bats' });
  }
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
