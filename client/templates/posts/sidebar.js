Template.sidebar.helpers({
	//var item = Router.route('/posts/:_id', {name: '.show'})
	post:function(){
		var name = Router.current().params._name;
		var post = Posts.findOne({name:name});
		return post;
	},
<<<<<<< HEAD
	exerciseLink: function(){
		var exercises = Posts.find().fetch();
		return exercises;
	}
=======
    postForum: function(){
      return Session.get('postForum');
    }

>>>>>>> 9318c07b81d8c0411442187afe3a918b74931472
});
