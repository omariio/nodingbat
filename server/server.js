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
        Exercises.insert({
          "section": "warmup-1",
          "name": "stringE",
          "inputs":[
            "('Hello')",
            "('Heelle')",
            "('Heelele')",
            "('HII')",
            "('e')",
            "('')"
          ],
          "setup": setup.stringE
        });
        Exercises.insert({
          "section": "warmup-1",
          "name": "everyNth",
          "inputs":[
            "('Miracle', 2)",
            "('abcdefg', 2)",
            "('Chocolate', 3)",
            "('Chocolate', 3)",
            "('Chocolate', 4)",
            "('Chocolate', 100)"
          ],
          "setup": setup.everyNth
        });
        Exercises.insert({
          "section": "warmup-1",
          "name": "monkeyTrouble",
          "inputs":[
            "(true, true)",
            "(false, false)",
            "(true, false)",
            "(false, true)"
          ],
          "setup": setup.monkeyTrouble
        });
        Exercises.insert({
          "section": "warmup-1",
          "name": "parrotTrouble",
          "inputs": [
            "(true, 6)",
            "(true, 7)",
            "(false, 6)",
            "(true, 21)",
            "(false, 21)",
            "(true, 23)",
            "(false, 23)",
            "(true, 20)",
            "(false, 12)"
          ],
          "setup": setup.parrotTrouble
        });
        Exercises.insert({
        "section": "warmup-1",
        "name": "frontBack",
        "inputs": [
          "('code')",
          "('a')",
          "('ab')",
          "('abc')",
          "('')",
          "('Chocolate')",
          "('aavj')",
          "('hello')"
        ],
        "setup": setup.frontBack
      });
      Exercises.insert({
      "section": "warmup-1",
      "name": "or35",
      "inputs": [
        "(3)",
        "(10)",
        "(8)",
        "(15)",
        "(5)",
        "(4)",
        "(9)",
        "(4)",
        "(7)",
        "(6)",
        "(17)",
        "(18)",
        "(29)",
        "(20)",
        "(21)",
        "(22)",
        "(45)",
        "(99)",
        "(100)",
        "(101)",
        "(121)",
        "(122)",
        "(123)"
      ],
      "setup": setup.or35
    });
    Exercises.insert({
    "section": "warmup-1",
    "name": "icyHot",
    "inputs": [
      "(120, -1)",
      "(-1, 120)",
      "(2, 120)",
      "(-1, 100)",
      "(-2, 120)",
      "(120, 120)"
    ],
    "setup": setup.icyHot
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "loneTeen",
  "inputs": [
    "(13, 99)",
    "(21, 19)",
    "(13, 13)",
    "(14, 20)",
    "(20, 15)",
    "(16, 17)",
    "(16, 9)",
    "(16, 18)",
    "(13, 19)",
    "(13, 20)",
    "(6, 18)",
    "(99, 13)",
    "(99, 99)"
  ],
  "setup": setup.loneTeen
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "startOz",
  "inputs": [
    "('ozymandias')",
    "('bzoo')",
    "('oxx')",
    "('ounce')",
    "('o')",
    "('abc')",
    "('')",
    "('zoo')",
    "('aztec')",
    "('zzzz')",
    "('oznic')"
  ],
  "setup": setup.startOz
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "in3050",
  "inputs": [
    "(30, 31)",
    "(30, 41)",
    "(40, 50)",
    "(40, 51)",
    "(39, 50)",
    "(50, 39)",
    "(40, 39)",
    "(49, 48)",
    "(50, 40)",
    "(50, 51)",
    "(35, 36)",
    "(35, 45)"
  ],
  "setup": setup.in3050
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "lastDigit",
  "inputs": [
    "(7, 17)",
    "(6, 17)",
    "(3, 113)",
    "(114, 113)",
    "(114, 4)",
    "(10, 0)",
    "(11, 0)"
  ],
  "setup": setup.lastDigit
  });


}
