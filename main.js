if (Meteor.isClient) {
Template.hello.helpers({
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

Template.hello.rendered = function () {
  var REMOVEME_MICHAEL = "sleepIn"
  Session.set("varName", data[REMOVEME_MICHAEL].setup);
}


Template.hello.events({
  "getEditorText": function() {
      return Session.get("varName"); // "varName" is variable name you provided to reactiveVar 
  },

  'click button': function(){
    var obj = eval(Session.get("varName"));
    var REMOVEME_MICHAEL = "sleepIn";
    var userSolutionArr = [];
    var solutionArray = [];
    var colorArr = []

    var container = $('<div id="container">');
    $('div#color').append(container);


    _.forEach(data["sleepIn"].inputs, function(input){
      var userOutput = eval(REMOVEME_MICHAEL + input);
      var output = eval("solutions." + REMOVEME_MICHAEL + input);

      userSolutionArr.push(userOutput)
      solutionArray.push(output);

      if(output == userOutput)
        colorArr.push("green" );
      else
        colorArr.push("red");

    //    var hue = 'rgb(140, 100,300)';

    //    $('#color').css('color', hue)
    // $('<div class="child">').css('background-color', hue).appendTo(container);

      
      

      // console.log(output);



      // var solutionBox = document.getElementById('solution');
      // console.log(solutionBox.innerHTML);



      
      // eval(data[REMOVEME_MICHAEL].divineFunction);
      // var divineAnswer = eval("divine" + input);
      // var mortalString = new String(Session.get("varName"));
      // eval(mortalString)
      // // console.log(sleepIn(true, true));
      // var mortalAnswer = eval(REMOVEME_MICHAEL + input);
      // console.log(divineAnswer === mortalAnswer)
    });
    $("#userSolution").text(userSolutionArr);
    $("#solution").text(solutionArray);
    $("#color").text(colorArr);

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