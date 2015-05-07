Template.sidebar.helpers({
	post:function(){
		var name = Router.current().params._name;
		var post = Posts.findOne({name:name});
		return post;
	},
  postForum: function(){
    return Session.get('postForum');
  },
	success: function(){
		return Session.get('success');
	},
	failure: function(){
		return Session.get('failure');
	}
});
