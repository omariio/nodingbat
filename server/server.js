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
              "(1)",
              "(2)",
              "(-1)",
              "(-2)",
              "(50)",
              ],
             "setup": setup.diff21
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"nearHundred",
            "inputs":[
              "(93)",
              "(90)",
              "(89)",
              "(110)",
              "(111)",
              "(121)",
              "(0)",
              "(5)",
              "(191)",
              "(189)"
              ],
            "setup": setup.nearHundred
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"missingChar",
            "inputs":[
              "('kitten', 1)",
              "('kitten', 0)",
              "('kitten', 4)",
              "('Hi', 0)",
              "('Hi', 1)",
              "('code', 0)",
              "('code', 1)",
              "('code', 2)",
              "('code', 3)",
              "('chocolate', 8)"
              ],
            "setup":setup.missingChar
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"backAround",
            "inputs":[
              "('cat')",
              "('Hello')",
              "('a')",
              "('abc')",
              "('read')",
              "('boo')"
              ],
            "setup": setup.backAround
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"startHi",
            "inputs":[
              "('hi there')",
              "('hi')",
              "('hello hi')",
              "('he')",
              "('h')",
              "('')",
              "('ho hi')",
              "('hi ho')"
              ],
            "setup": setup.startHi
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"hasTeen",
              "inputs":[
                "(13, 20, 10)",
                "(20, 19, 10)",
                "(20, 10, 13)",
                "(1, 20, 12)",
                "(19, 20, 12)",
                "(12, 20, 19)",
                "(12, 9, 20)",
                "(12, 18, 20)",
                "(14, 2, 20)",
                "(4, 2, 20)",
                "(11, 22, 22)"
                ],
            "setup": setup.hasTeen
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"mixStart",
              "inputs":[
                "('mix snacks')",
                "('pix snacks')",
                "('piz snacks')",
                "('nix')",
                "('ni')",
                "('n')"
                ],
            "setup": setup.mixStart
        });
        Exercises.insert({
            "section":"warm-up1",
            "name":"close10",
              "inputs":[
                "(8, 13)",
                "(13, 8)",
                "(13, 7)",
                "(7, 13)",
                "(9, 13)",
                "(13, 8)",
                "(10, 12)",
                "(11, 10)",
                "(5, 21)",
                "(0, 20)",
                "(0, 20)",
                "(10, 10)"
                ],
          "setup": setup.close10
        });
}
