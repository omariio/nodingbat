  Template.postHelp.helpers({
    chatLog:function(){
      var c = Posts.findOne({_id:Session.get('postForum')});
      x = c._id;
      return Chatter.find();
      
    },
    userName: function(){
      console.log(this);
      return this.user.emails[0].address;
    }
  });

  Template.postHelp.events({
      'keypress input': function(e) {
        if(e.keyCode != 13)
          return;

        var message = document.getElementById("chat-box").value;

        if(message.length == 0)
          return;

        Meteor.call("newMessage", message, x);
        document.getElementById("chat-box").value = "";
      },
      'click #chat-send-button': function(){

      }
  });
