if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

var myEditor;

warmup1 = function(n) {
  if (n <= 21)
    return 21 - n;
  else
    return (n - 21) * 2;
} 

Template.hello.helpers({
  "editorOptions": function() {
        return {
            lineNumbers: true,
            mode: "javascript"
        }
    },

    "editorCode": function() {
        return "Code to show in editor";
    }

});


// Template.hello.rendered = function () {
//   Session.set("varName", "diff21 = function(n) {\n" +
//       "\tif (n <= 21)\n" +
//       "\t\treturn 21 - n;\n" + 
//       "\telse\n" + 
//       "\t\treturn (n - 21) * 2;\n" + 
//       "} \n\n");
//       // "console.log(diff21(19));");
// }


Template.hello.events({
  "getEditorText": function() {
      return Session.get("varName"); // "varName" is variable name you provided to reactiveVar 
  },

  'click button': function(){
      var obj = eval("(" + Session.get("varName") + ")");
      for(i = 0; i < 5; i++){
        if(obj(i) == warmup1(i))
          console.log("great success! ( obj: ", obj(i), "==  diff21: ", warmup1(i),")");
        else 
          console.log("nice try");
      }
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

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
