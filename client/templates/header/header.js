Template.header.Template.name.helpers({
  username: function(){
  	return Meteor.users.find({username: FlowRouter.current().params.username});
    console.log(FlowRouter.current().params.username);
});

Template.header.rendered=function(){
  if(!Meteor.user()){
    var a = $('.dropdown-toggle').html(" ");
    a.append("<span class='glyphicon glyphicon-user'></span>")
  }else{
    $('#login-buttons-logout').before('<a href="/account" class="account-link button">My Account</a>');
  }
};
