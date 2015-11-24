Template.header.helpers({
  username: function(){
  	return Meteor.users.findOne().username;
  },
  section: function(){
  	return Meteor.exercises.find({section: section});
  }
});

Template.header.rendered=function(){
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  $('#aside').pushpin({ top:110, bottom:500 });
  if(!Meteor.user()){
    var a = $('.dropdown-toggle').html(" ");
    a.append("<span class='glyphicon glyphicon-user'></span>")
  }else{
    $('#login-buttons-logout').before('<a href="/profile" class="account-link button">My Account</a>');
  }
};
