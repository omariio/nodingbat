  Template.postHelp.helpers({
    chatLog:function(){
      var c = Posts.findOne({_id:Session.get('postForum')});
      console.log(c);
      x = c._id;
      console.log(x);
      return Chatter.find({modalID:x}, {sort:{timestamp: -1}});
    },
    userName: function(){
      console.log(this);
      return this.user.username;
    }
  });

  Template.postHelp.events({
      'keypress input': function(e) {
        var c = Posts.findOne({_id:Session.get('postForum')});
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
        // var c = Posts.findOne({_id:Session.get('postForum')});

        Session.set('postForum',null);
      }
  });
