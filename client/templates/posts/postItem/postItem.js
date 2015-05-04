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
  Session.set("varName", this.data.setup);
}


Template.postItem.events({
  "getEditorText": function() {
      return Session.get("varName"); // "varName" is variable name you provided to reactiveVar
  },

  'click #run': function(){
    var obj = eval(Session.get("varName"));
    var solutionIndex = 1;
    $(".rotate").toggleClass("down");

    //self is this
    var self = this;
    var index = 1;
    for( ; index < self.inputs.length; ++index){

      var userOutput = eval(self.name + self.inputs[index]);
      var output = eval("solutions." + self.name + self.inputs[index]);

      if(output == userOutput){
        $("div.colors:nth-child("+index+")").css("background-color", "green");
        
        solutionIndex++;

        currentDiv.html(self.parameters+"<i class='fa fa-long-arrow-right'></i>"+ output +" <i class='fa fa-smile-o'></i> "+ userOutput );
      }
      else{
        var currentDiv = $("div.colors:nth-child("+index+")");
        currentDiv.css("background-color", "red");

        currentDiv.html(self.parameters+"<i class='fa fa-long-arrow-right'></i>"+ output +" <i class='fa fa-frown-o'></i> "+ userOutput );
      }
    }

    if (solutionIndex == index)
      Meteor.call("userUpdate", Meteor.user()._id, this.name);

  },
  'click #help': function(){
    Session.set("postForum", this._id);
  }
});

var enclose = function(functionString){
  return eval(functionString);
}
