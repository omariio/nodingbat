if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

var myEditor;

Template.hello.helpers({

    renderEditor: function () {
    return function(editor) {
      myEditor = editor;
    }
  }

});


  Template.hello.events({
    "some event": function(e, t) {
        var code = t.find("jcode").value;
        alert(code);
    }

});
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
