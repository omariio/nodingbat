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
          "setup":"/*The parameter weekday is True if it is a weekday, and the parameter vacation*/ \n var sleepIn = function(weekday, vacation){ }",
          "divineFunction":"var divine = function(weekday, vacation){ return !weekday || vacation; }"
      });
    
        Posts.insert({
            "section":"warm-up1",          
          	"name":"diff21",
              "inputs":[
                "(true, true)", 
                "(true, false)", 
                "(false, true)",
                "(false, false)"
                ],
          "setup":"/*The parameter weekday is True if it is a weekday, and the parameter vacation*/ \n var sleepIn = function(weekday, vacation){ }",
          "divineFunction":"var diff21 = function(n) {if (n <= 21) return 21 - n; else return (n - 21) * 2;}"
        });
       }
        // });
}