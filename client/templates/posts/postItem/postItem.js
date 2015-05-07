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
  item: function(){
    return getPost();
  }
});

Template.postItem.rendered = function () {
  Session.set('success', null);
  Session.set('failure', null);
  Session.set('postForum', null);

  Session.set("varName", getPost().setup);
}


Template.postItem.events({
  "getEditorText": function() {
    return Session.get("varName"); // "varName" is variable name you provided to reactiveVar
  },
  'keypress #code-mirror': function(e) {
    if(e.keyCode != 13)
      return;
    run(getPost());
  },
  'click #run': function(){
    run(getPost());
  },
  'click #help': function(){
    Session.set("postForum", this._id);
  }
});

var enclose = function(functionString){
  return eval(functionString);
}

var getPost = function(){
  return Posts.findOne({name: Router.current().params._name})
}

var run = function(self){
  try{
    var obj = eval(Session.get("varName"));
  }
  catch(e){
    console.log("it crashed!")
    console.log(e);
  }
  var obj = eval(Session.get("varName"));
  var solutionIndex = 1;
  $(".rotate").toggleClass("down");

  // self is this
  // var this = self;
  var index = 0;
  for( ; index < self.inputs.length; ++index){
    var userOutput = eval(self.name + self.inputs[index]);
    var output = eval("solutions." + self.name + self.inputs[index]);



    if(output == userOutput){
      var currentDiv = $("div.colors:nth-child("+(index + 1)+")");
      currentDiv.css("background-color", "green");
      solutionIndex++;

      currentDiv.html(self.parameters+"<i class='fa fa-long-arrow-right'></i>"+ output +" <i class='fa fa-smile-o'></i> "+ userOutput );
    }
    else{
      var currentDiv = $("div.colors:nth-child("+(index+1)+")");
      currentDiv.css("background-color", "red");

      currentDiv.html(self.parameters+"<i class='fa fa-long-arrow-right'></i>"+ output +" <i class='fa fa-frown-o'></i> "+ userOutput );
    }
  }

  if (solutionIndex == (index+1)){
    Session.set('failure', null);
    Session.set('success', getPost()._id);

    console.log("userUpdate")
    Meteor.call("userUpdate", getPost().name);
  }else{
    Session.set('success', null);
    Session.set('failure', getPost()._id);
  }
}
