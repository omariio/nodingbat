Template.postItem.helpers({
    editorOptions: function() {
        return {
            lineNumbers: true,
            mode: "javascript"
        }
    },
    editorCode: function() {
        return "Code to show in editor";
    }
});

Template.postItem.rendered = function () {
  console.log("rendered");
  // var REMOVEME_MICHAEL = "sleepIn"
  //   console.log(this); 
  // console.log(this.data);
  // console.log(Session.get("varName"));
  Session.set("varName", this.data.setup);
  // console.log(Session.get("varName"));
  // console.log(this);

}


Template.postItem.events({
  "getEditorText": function() {
      return Session.get("varName"); // "varName" is variable name you provided to reactiveVar 
  },

  'click #run': function(){
    var obj = eval(Session.get("varName"));
    var userSolutionArr = [];
    var solutionArray = [];
    var colorArr = [];
    var index = 1;

    var self = this;

    _.forEach(self.inputs, function(input){
      var userOutput = eval(self.name + input);
      console.log(userOutput);
      var output = eval("solutions." + self.name + input);

      if(output == userOutput){
        var currentDiv = $("div.colors:nth-child("+index+")");
        currentDiv.css("background-color", "green");
        console.log(userOutput);

        currentDiv.html("userOutput: RIGHT " + userOutput);
      }
      else{
        var currentDiv = $("div.colors:nth-child("+index+")");
        currentDiv.css("background-color", "red");
        console.log(userOutput);

        currentDiv.html("userOutput: WRONG " + userOutput);
      }
      index=index+1;
    });
  },
  'click #help': function(){
    p = Posts.findOne();
    Session.set("postForum", p._id);
    console.log("help me");


  }
});

var enclose = function(functionString){
  return eval(functionString);
}