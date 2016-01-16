Template.postItem.helpers({
  userRank: function(){
    user = Meteor.users.findOne({username: this.username.username});
    var batsLen = user.bats.length;
    var newRank = user.rank;

    if((batsLen < 10) && (user.rank != 100)){
      newRank = 0;
    }
    if((batsLen >= 10) && (batsLen <25)){
      newRank = 10;
    }
    if((batsLen >= 25) && (batsLen <50)){
      newRank = 25;
    }
    if((batsLen >= 50) && (batsLen <75)){
      newRank = 50;
    }
    if((batsLen >= 75) && (batsLen <= 100)){
      newRank = 100;
    }
    return newRank;
  },
  posts: function() {
    return Posts.find();
  },
  exerciseName: function() {
    return FlowRouter.current().params.name;
  },
  sectionName: function() {
    return FlowRouter.current().params.section;
  },
  currentUser: function() {
    return Meteor.user();
  },
  getComments: function() {
    var routeName = FlowRouter.current().params.name;
    return Comments.find({exerciseName: routeName}, {sort: {votes: -1}});
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    !_.include(this.upvoters, userId)
      if (userId) {
        return 'btn-primary upvotable';
      } else {
        return 'disabled';
      }
  }
});

Template.postItem.events({
  'click #submit': function() {
    var text = $('textarea').val();
    Meteor.call('addComment', text,  Meteor.user(), FlowRouter.current().params.name);
    var text = $('textarea').val('');
  },
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});

Template.postItem.rendered = function() {
}
