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
  Exercises.insert({
  "section": "warmup-1",
  "name": "sumDouble",
  "inputs": [
    "(1, 2)",
    "(3, 2)",
    "(2, 2)",
    "(-1, 0)",
    "(3, 3)",
    "(0, 0)",
    "(0, 1)",
    "(3, 4)"
  ],
  "setup": setup.sumDouble
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "makes10",
  "inputs": [
    "(9, 10)",
    "(9, 9)",
    "(1, 9)",
    "(10, 1)",
    "(10, 10)",
    "(8, 2)",
    "(8, 3)",
    "(10, 42)",
    "(12, -2)"
  ],
  "setup": setup.makes10
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "notString",
  "inputs": [
    "('candy')",
    "('x')",
    "('not bad')",
    "('bad')",
    "('not')",
    "('is not')",
    "('no')"
  ],
  "setup": setup.notString
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "front3",
  "inputs": [
    "('Java')",
    "('Chocolate')",
    "('abc')",
    "('abcXYZ')",
    "('ab')",
    "('a')",
    "('')"
  ],
  "setup": setup.front3
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "front22",
  "inputs": [
    "('kitten')",
    "('Ha')",
    "('abc')",
    "('ab')",
    "('a')",
    "('')",
    "('Logic')"
  ],
  "setup": setup.front22
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "in1020",
  "inputs": [
    "(12, 99)",
    "(21, 12)",
    "(8, 99)",
    "(99, 10)",
    "(20, 20)",
    "(21, 21)",
    "(9, 9)",
  ],
  "setup": setup.in1020
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "intMax",
  "inputs": [
    "(1, 2, 3)",
    "(1, 3, 2)",
    "(3, 2, 1)",
    "(9, 3, 3)",
    "(3, 9, 3)",
    "(3, 3, 9)",
    "(8, 2, 3)",
    "(-3, -1, -2)",
    "(6, 2, 5)",
    "(5, 6, 2)",
    "(5, 2, 6)"
  ],
  "setup": setup.intMax
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "max1020",
  "inputs": [
    "(11, 19)",
    "(19, 11)",
    "(11, 9)",
    "(9, 21)",
    "(10, 21)",
    "(21, 10)",
    "(9, 11)",
    "(23, 10)",
    "(20, 10)",
    "(7, 20)",
    "(17, 16)"
  ],
  "setup": setup.max1020
  });
  Exercises.insert({
  "section": "warmup-1",
  "name": "endUp",
  "inputs": [
    "('Hello')",
    "('hi there')",
    "('hi')",
    "('woo hoo')",
    "('xyz12')",
    "('x')",
    "('')"
  ],
  "setup": setup.endUp
  });
  // start of the string-1 java problems
  Exercises.insert({
  "section": "string-1",
  "name": "helloName",
  "inputs": [
    "('Bob')",
    "('Alice')",
    "('X')",
    "('Dolly')",
    "('Alpha')",
    "('Omega')",
    "('Goodbye')",
    "('ho ho ho')",
    "('xyz!')",
    "('Hello!')"
  ],
  "setup": setup.helloName
  });
  Exercises.insert({
  "section": "string-1",
  "name": "makeAbba",
  "inputs": [
    "('Hi', 'Bye')",
    "('Yo', 'Alice')",
    "('What', 'Up')",
    "('aaa', 'bbb')",
    "('x', 'y')",
    "('x', '')",
    "('ba', 'Ya')",
    "('Ya', 'Ya')"
  ],
  "setup": setup.makeAbba
  });
  Exercises.insert({
  "section": "string-1",
  "name": "makeOutWord",
  "inputs": [
    "('<<>>', 'Yay')",
    "('<<>>', 'WooHoo')",
    "('[[]]', 'word')",
    "('HHoo', 'Hello')",
    "('abyz', 'YAY')"
  ],
  "setup": setup.makeOutWord
  });
  Exercises.insert({
  "section": "string-1",
  "name": "extraEnd",
  "inputs": [
    "('Hello')",
    "('ab')",
    "('Hi')",
    "('Candy')",
    "('Code')"
  ],
  "setup": setup.extraEnd
  });
  Exercises.insert({
  "section": "string-1",
  "name": "withoutEnd",
  "inputs": [
    "('Hello')",
    "('java')",
    "('coding')",
    "('code')",
    "('ab')",
    "('Chocolate!')",
    "('kitten')",
    "('woohoo')"
  ],
  "setup": setup.withoutEnd
  });
  Exercises.insert({
  "section": "string-1",
  "name": "comboString",
  "inputs": [
    "('Hello', 'hi')",
    "('Hi', 'Hello')",
    "('aaa', 'b')",
    "('b', 'aaa')",
    "('aaa', '')",
    "('', 'bb')",
    "('aaa', '1234')",
    "('aaa', 'bb')",
    "('a', 'bb')",
    "('bb', 'a')",
    "('a', 'bb')",
    "('xyz', 'ab')"
  ],
  "setup": setup.comboString
  });
  Exercises.insert({
  "section": "string-1",
  "name": "nonStart",
  "inputs": [
    "('Hello', 'There')",
    "('java', 'code')",
    "('shotl', 'java')",
    "('ab', 'xy')",
    "('ab', 'x')",
    "('x', 'ac')",
    "('a', 'x')",
    "('kit', 'kat')",
    "('mart', 'dart')"
  ],
  "setup": setup.nonStart
  });
  Exercises.insert({
  "section": "string-1",
  "name": "firstHalf",
  "inputs": [
    "('WooHoo')",
    "('HelloThere')",
    "('abcdefg')",
    "('ab')",
    "('')",
    "('0123456789')",
    "('kitten')"
  ],
  "setup": setup.firstHalf
  });
  Exercises.insert({
  "section": "string-1",
  "name": "firstTwo",
  "inputs": [
    "('Hello')",
    "('abcdefg')",
    "('ab')",
    "('a')",
    "('')",
    "('kitten')",
    "('hi')",
    "('hiya')"
  ],
  "setup": setup.firstTwo
  });
  Exercises.insert({
  "section": "string-1",
  "name": "left2",
  "inputs": [
    "('Hello')",
    "('java')",
    "('Hi')",
    "('code')",
    "('cat')",
    "('12345')",
    "('Chocolate')",
    "('bricks')"
  ],
  "setup": setup.left2
  });
  Exercises.insert({
  "section": "string-1",
  "name": "right2",
  "inputs": [
    "('Hello')",
    "('java')",
    "('Hi')",
    "('code')",
    "('cat')",
    "('12345')"
  ],
  "setup": setup.right2
  });
  Exercises.insert({
  "section": "string-1",
  "name": "theEnd",
  "inputs": [
    "('Hello', true)",
    "('Hello', false)",
    "('oh', true)",
    "('oh', false)",
    "('x', true)",
    "('x', false)",
    "('java', true)",
    "('chocolate', false)",
    "('1234', true)",
    "('code', false)"
  ],
  "setup": setup.theEnd
  });
  Exercises.insert({
  "section": "string-1",
  "name": "withouEnd2",
  "inputs": [
    "('Hello')",
    "('abc')",
    "('ab')",
    "('a')",
    "('')",
    "('coldy')",
    "('java code')"
  ],
  "setup": setup.withouEnd2
  });
  Exercises.insert({
  "section": "string-1",
  "name": "middleTwo",
  "inputs": [
    "('string')",
    "('code')",
    "('Practice')",
    "('ab')",
    "('123456789')"
  ],
  "setup": setup.middleTwo
  });
  Exercises.insert({
  "section": "string-1",
  "name": "endsLy",
  "inputs": [
    "('oddly')",
    "('y')",
    "('oddl')",
    "('olydd')",
    "('ly')",
    "('')",
    "('falsely')",
    "('evenly')"
  ],
  "setup": setup.endsLy
  });
}
