Accounts.onCreateUser(function(options, user) {
  user.bats = [];
  return user;
});

Meteor.publish("allUserData", function() {
  return Meteor.users.find({}, {fields: {
    'bats': 1
  }});
});
    Meteor.startup(function () {
        Meteor.methods({
        newMessage: function(body, ceID){
        if(!messageObjector.user())
          return;
            var messageObject = {
              body:body,
              modalID:ceID,
              user:Meteor.user(),
              timestamp:(new Date()).getTime()
            }
              Chatter.insert(messageObject);
        },
        userUpdate: function (name) {
          if(!Meteor.user())
            return;
          if(! _.find(Meteor.user().bats, function(bat){ return bat == name; }))
            Meteor.users.update({_id:Meteor.user()._id}, {$push:{"bats": name}});

        }
      })
    });
    // database of each coding bat exercise
      if (Exercises.find().count() === 0) {
        Exercises.insert({
            "section":"warm-up1",
          	"name":"sleepIn",
            "inputs":[
              "(true, true)",
              "(true, false)",
              "(false, true)",
              "(false, false)"
              ],
             "setup": setup.sleepIn
      });
        Exercises.insert({
            "section":"warm-up1",
          	"name":"diff21",
            "inputs":[
              "(19)",
              "(10)",
              "(21)",
              "(22)",
              "(25)",
              "(30)",
              "(0)",            
              ],
             "setup": setup.diff21
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"nearHundred",
            "inputs":[
              "(93)",
              "(90)",
              "(89)"
              ],
            "setup": setup.nearHundred
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"missingChar",
            "inputs":[
              "('kitten', 1)",
              "('kitten', 0)",
              "('kitten', 4)"
              ],
            "setup":setup.missingChar
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"backAround",
              "inputs":[
                "('cat')",
                "('Hello')",
                "('a')"
                ],
                "parameters": "backAround(str, n) ",
          "setup": setup.backAround
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"startHi",
              "inputs":[
                "('hi there')",
                "('hi')",
                "('hello hi')"
                ],
          "setup":setup.startHi
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"hasTeen",
              "inputs":[
                "(true, true)",
                "(true, false)",
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"startHi",
              "inputs":[
                "(true, true)",
                "(true, false)",
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"mixStart",
              "inputs":[
                "(true, true)",
                "(true, false)",
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"close10",
              "inputs":[
                "(true, true)",
                "(true, false)",
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
        });
}
