Template.exerciseItem.helpers({
  editorOptions: function() {
      return {
        lineNumbers: true,
        mode: "javascript",
        lineWrapping: true
      }
  },
  editorCode: function() {
    return "Code to show in editor";
  },
  item: function(){
    return getExercise();
  },
  exercises: function() {
  	return Exercises.find({name: FlowRouter.current().params.name});
  },
  prevURL: function() {
    var currentExercise = Exercises.findOne({name: FlowRouter.current().params.name});
    return Exercises.findOne({index: currentExercise.index - 1}).name;
  },
  nextURL: function() {
    var currentExercise = Exercises.findOne({name: FlowRouter.current().params.name});
    return Exercises.findOne({index: currentExercise.index + 1}).name;
  },
  getCurrentExercise: function() {

  }
});

function queryString(n) {
  var allExercises = Exercises.find().fetch();
  var query = allExercises[n].name;
  return query;
}

getURL = function getCurrentURL() {
  var allExercises = Exercises.find().fetch();
  var currentExercise = _.find(allExercises, function(x) {
    return x.name == FlowRouter.current().params.name;
  });
  return currentExercise;
}

Template.exerciseItem.rendered = function () {
  Tracker.autorun(function(){
    session_set();
  });
}

Template.exerciseItem.events({
  "getEditorText": function() {
    return Session.get("varName"); // "varName" is variable name you provided to reactiveVar
  },
  'keypress #code-mirror': function(e) {
    if(e.keyCode != 13)
      return;
    run(getExercise());
  },
  'click #run': function(){
    run(getExercise());
  },
  'click #help': function(){
    Session.set("postList", this._id);
  },
  'click .previous': function(d){
    // e.preventDefault();
    //WHY IS THIS NECESSARY?? -TYLER
    FlowRouter.go(d.currentTarget.href);
  },
  'click .next': function(d){
    // e.preventDefault();
    FlowRouter.go(d.currentTarget.href);
  }
});

var enclose = function(functionString){
  return eval(functionString);
}
var getExercise = function(){
    return Exercises.findOne({name: FlowRouter.current().params.name});
  }

var session_set = function(){
  Session.set('success', null);
  Session.set('failure', null);
  Session.set("varName", getExercise().setup);
}

var abiShake = function(){
  $('h1.animated').toggleClass('shake');
}

var run = function(self){
  try{
    var obj = eval(Session.get("varName"));
  }
  catch(e){
    console.log("it crashed!");
    console.log(e);
  }
  var obj = eval(Session.get("varName"));
  var solutionIndex = 1;
  $(".rotate").toggleClass("down");
  var parent = $("tbody.colors-container");

  var index = 0;
  for( ; index < self.inputs.length; ++index){
    var userOutput = eval(self.name + self.inputs[index]);
    var output = eval("solutions." + self.name + self.inputs[index]);

    if(output == userOutput){
      solutionIndex++;
      parent.append("<tr class='success'><td>"+self.name+self.inputs[index]+"</td><i class='fa fa-long-arrow-right'></i><td>"+ output +"</td><i class='fa fa-smile-o'></i><td>"+ userOutput + "</td></tr>" );
    }
    else{
      parent.append("<tr class='failure'><td>"+self.name+self.inputs[index]+"</td><i class='fa fa-long-arrow-right'></i><td>"+ output +"</td><i class='fa fa-smile-o'></i><td>"+ userOutput + "</td></tr>" );
      abiShake();
    }
  }

  if (solutionIndex == (index+1)){
    Session.set('failure', null);
    Session.set('success', getExercise()._id);
    Meteor.call("userUpdate", getExercise().name);

  }else{
    Session.set('success', null);
    Session.set('failure', getExercise()._id);
  }
}
