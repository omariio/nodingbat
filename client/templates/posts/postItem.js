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
    console.log(this); 
  console.log(this.data);
  console.log(Session.get("varName"));
  Session.set("varName", this.data.setup);
  console.log(Session.get("varName"));
  console.log(this);

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
      // console.log("poopydick");
      // console.log(varName);
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
});

var enclose = function(functionString){
  return eval(functionString);
}