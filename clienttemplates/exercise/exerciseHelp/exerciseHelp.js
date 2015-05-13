Template.exerciseHelp.helpers({
  chatLog:function(){
    var c = Chatter.findOne({_id:Session.get('exerciseForum')});
    x = c._id;
    return Chatter.find({modalID:x}, {sort:{timestamp: -1}});
  },
  userName: function(){
    return this.user.username;
  }
});

Template.exerciseHelp.events({
    'keypress input': function(e) {
      var c = Exercises.findOne({_id:Session.get('exerciseForum')});
      // var x = c._id;
      if(e.keyCode != 13)
        return;

      var message = document.getElementById("chat-box").value;

      if(message.length == 0)
        return;

      Meteor.call("newMessage", message, x);
      document.getElementById("chat-box").value = "";
    },
    'click #chat-send-button': function(){

    },
    'click #close':function(){
      Session.set('exerciseForum',null);
    }
});
