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
    var userSolutionArr = [];
    var solutionArray = [];
    var colorArr = [];
    var index = 1;

    var self = this;

    _.forEach(self.inputs, function(input){

      // var parameters = input.parameters;
      // console.log(parameters)
      var userOutput = eval(self.name + input);
      var output = eval("solutions." + self.name + input);
      // output.attr('style', 'color: #222222"')
      if(output == userOutput){
        var currentDiv = $("div.colors:nth-child("+index+")");
        currentDiv.css("background-color", "green");

        currentDiv.html(self.parameters+"<i class='fa fa-long-arrow-right'></i>"+ output +"  <i class='fa fa-smile-o'></i> "+ userOutput );

      }
      else{
        var currentDiv = $("div.colors:nth-child("+index+")");
        currentDiv.css("background-color", "red");

        currentDiv.html(self.parameters+"<i class='fa fa-long-arrow-right'></i>"+ output +" <i class='fa fa-frown-o'></i> "+ userOutput );

        // curentDiv.html(a+b+c)
      }
      index=index+1;
    });
  },
  'click #help': function(){
    Session.set("postForum", this._id);

  }
});

var enclose = function(functionString){
  return eval(functionString);
}
