  if (Meteor.isServer) {
  // Meteor.startup(function () {
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
            "parameters": "sleepIn(weekday, vacation)- ", 
            "setup":"/*The parameter weekday is True if it is a weekday, and the parameter*/\n /*vacation*/ \n var sleepIn = function(weekday, vacation){ }",
            "divineFunction":"var divine = function(weekday, vacation){ return !weekday || vacation; }"
      });
    
        Posts.insert({
            "section":"warm-up1",          
          	"name":"diff21",
              "inputs":[
                "(19)", 
                "(10)", 
                "(21)",
                ],
            "parameters": "diff21(n)- ", 
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21 = function(n){ \n}",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
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
          "setup":"/*Given an int n, return the absolute difference between n and 21,\nexcept return double the absolute difference if n is over 21.*/\nvar diff21=function(n){ }",
          "divineFunction":"var diff21 = function(n){ if (n <= 21){ return 21 - n;} else {return (n - 21) * 2;}}"
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
        // });
}