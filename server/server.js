  if (Meteor.isServer) {
    Meteor.startup(function () {
        Meteor.methods({
        newMessage: function(body, ceID){
        if(!Meteor.user())
          return;

        var messageObject = {
          body:body,
          modalID:ceID,   
          user:Meteor.user(),
          timestamp:(new Date()).getTime()
        }

        Chatter.insert(messageObject);

        }
      })
    });
    // database of each coding bat exercise
      if (Posts.find().count() === 0) {
        Posts.insert({
            "section":"warm-up1",
          	"name":"sleepIn",
              "inputs":[
                "(true, true)", 
                "(true, false)", 
                "(false, true)",
                "(false, false)"
                ],
            "parameters": "sleepIn(weekday, vacation) ", 
            "setup":"/* The parameter weekday is True if it is a weekday, and the parameter */\n/* vacation is True if we are on vacation. We sleep in if it is not a weekday */\n/* or we're on vacation. Return True if we sleep in. */\n\nvar sleepIn = function(weekday, vacation){ \n\n}"
            // "divineFunction":"var divine = function(weekday, vacation){ return !weekday || vacation; }"
      });
    
        Posts.insert({
            "section":"warm-up1",          
          	"name":"diff21",
              "inputs":[
                "(19)", 
                "(10)", 
                "(21)",
                ],
            "parameters": "diff21(n) ", 
          "setup":"/* Given an int n, return the absolute difference between n and 21, */\n/* except return double the absolute difference if n is over 21. */\nvar diff21 = function(n){ \n\n}"
        });
        Posts.insert({
            "section":"warm-up1",          
            "name":"nearHundred",
              "inputs":[
                "(93)", 
                "(90)", 
                "(89)",
                ],
                "parameters": "nearHundred(n)- ", 
          "setup":"/* Given an int n, return True if it is within 10 of 100 or 200. */\n/* Note: abs(num) computes the absolute value of a number. */\nnearhundred = function(n){ \n\n}",
          "divineFunction":"var nearHundred = function(n) {if (Math.abs(100) - n <= 10 || Math.abs(200) - n <= 10){return true;}else{return false;}}"
        });
        Posts.insert({
            "section":"warm-up1",          
            "name":"missingChar",
              "inputs":[
                "(true, true)", 
                "(true, false)", 
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
        });
        Posts.insert({
            "section":"warm-up1",          
            "name":"backAround",
              "inputs":[
                "(true, true)", 
                "(true, false)", 
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
        });
        Posts.insert({
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
        Posts.insert({
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
        Posts.insert({
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
        Posts.insert({
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
        Posts.insert({
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
        Posts.insert({
            "section":"warm-up1",          
            "name":"stringE",
              "inputs":[
                "(true, true)", 
                "(true, false)", 
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
        });
        Posts.insert({
            "section":"warm-up1",          
            "name":"everyNth",
              "inputs":[
                "(true, true)", 
                "(true, false)", 
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
        });
        Posts.insert({
            "section":"warm-up1",          
            "name":"monkeyTrouble",
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
}