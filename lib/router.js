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

    if(username != null){
      BlazeLayout.render('profile', { top: 'header', main: 'bats' });
    }
    else{
        BlazeLayout.render('notFound', { top: 'header', main: 'bats' });
      }
  }
});


FlowRouter.route('/:section', {
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

FlowRouter.route('/forum/:section/:name', {
    subscriptions: function(params, queryParams) {
        this.register('exerciseItem', Meteor.subscribe('exercises', params.name));
        console.log(params.name);
    },
    action: function (params, queryParams) {
      BlazeLayout.render('postItem', { top: 'header', main: 'postItem' });
    }
});
