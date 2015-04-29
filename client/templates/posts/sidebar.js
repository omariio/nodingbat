Template.sidebar.helpers({
	//var item = Router.route('/posts/:_id', {name: '.show'})
	post:function(){
		var name = Router.current().params._name;
		var post = Posts.findOne({name:name});
		console.log(post);
		return post;
	}
});