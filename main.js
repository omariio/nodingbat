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
// Coding Bat Answers for warmup-1
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
// We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble. 
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// Given an int n, return the absolute difference between n and 21, 
// except return double the absolute difference if n is over 21.
// var diff21 = function(n) {
// var diff21 = function(n) {
//   if (n <= 21)
//     return 21 - n;
//   else
//     return (n - 21) * 2;
// } 

// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. 
//We are in trouble if the parrot is talking and the hour is before 7 or after 20. 
//Return True if we are in trouble.
// function parrotTrouble(talking, hour) {
//  if (talking === true && (hour < 7 || hour > 20)) {
//     return true;
//  }   
//  else {
//    return false;
//  }
// }
// console.log(parrotTrouble(true, 6));
// console.log(parrotTrouble(true, 7));
// console.log(parrotTrouble(false, 6));

//Given 2 ints, a and b, return True if one of them is 10 or if their sum is 10. 
// var intTener = function(a, b) {
//   if (a === 10 || b === 10 || a + b === 10){
//     return true;
//   }
//   else {
//     return false;  
//   }
// }
// console.log(intTener(9, 10));
// console.log(intTener(9, 9));
// console.log(intTener(1, 9));

// Given an int n, return True if it is within 10 of 100 or 200. 
//Note: abs(num) computes the absolute value of a number.
// var nearHundred = function(n) {
//   if (Math.abs(100) - n <= 10 || Math.abs(200) - n <= 10){
//     return true;
//   }
//     return false;
// }
// console.log(nearHundred(93));
// console.log(nearHundred(90));
// console.log(nearHundred(89));

//Given 2 int values, return True if one is negative and one is positive. 
//Except if the parameter "negative" is True, then return True only if 
//both are negative. 

// var posNeg = function(a, b, negative) {
//   if (negative === true) {
//     return true;
//   } 
//   if ((a < 0 && b > 0) || a > 0 && b < 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(posNeg(1, -1, false));
// console.log(posNeg(-1, 1, false));
// console.log(posNeg(-4, -5, true));

// Given 2 int values, return True if one is negative and one is positive. 
//Except if the parameter "negative" is True, then return True only if 
//both are negative.

// var posNeg = function(a, b, negative) {
//   if (negative === true) {
//     if (a < 0 && b < 0){
//       return true;
//     }
//   }
//   if ((a < 0 && b > 0) || (a > 0 && b < 0)){
//     return true;
//   }
// };
// console.log(posNeg(1, -1, false));
// console.log(posNeg(-1, 1, false));
// console.log(posNeg(-4, -5, true));
}