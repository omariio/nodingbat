if (Meteor.isClient) {
Template.postItem.helpers({
    editorOptions: function() {
        return {
            lineNumbers: true,
            mode: "javascript"
        }
    },
    editorCode: function() {
        return "Code to show in editor";
    },
    author: function(){
      var p = Posts.findOne();
      return p;
    }
    // name: function(){
    //   var x = Posts.findOne(name);
    //   return x;
    // }
});

Template.postItem.rendered = function () {
  console.log("rendered");
  // var REMOVEME_MICHAEL = "sleepIn"
  Session.set("varName", this.data.setup);
}


Template.postItem.events({
  "getEditorText": function() {
      return Session.get("varName"); // "varName" is variable name you provided to reactiveVar 
  },

  'click button': function(){
    var obj = eval(Session.get("varName"));
    var userSolutionArr = [];
    var solutionArray = [];
    var colorArr = [];
    var index = 1;

    var self = this;
    _.forEach(self.inputs, function(input){
      console.log(index);
      var userOutput = eval(self.name + input);
      var output = eval("solutions." + self.name + input);

      if(output == userOutput){
        console.log("green");
        $("div.colors:nth-child("+index+")").css("background-color", "green");
      }
      else{
        console.log("red");
        $("div.colors:nth-child("+index+")").css("background-color", "red");
      }
      index=index+1;
    });
  }
      // console.log(obj);
      // console.log(v);
      //   if (obj != (21 - v))
      //   console.log("wrong");
      // else console.log("hooray");
  // "some event": function(e, t) {
  //     console.log(e);
  //     console.log(t);
  //     var code = t.find("#some-id").value;
  //     alert(code);
  //   }
});

var enclose = function(functionString){
  return eval(functionString);
}
// At the bottom of the client code
Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
}



