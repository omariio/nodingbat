
# noding-bat-meteor
<http://www.nodingbat.com/>
### https://github.com/omariio/nodingbat
=======
# nodingbat.com
A web app built in meteor js, where users can practice programming problems
in javascript- and earn cute little bats along the way. The problems are based
off of <http://codingbat.com/>

## How you can help:
We need people to continue adding problems from the coding bat site. Eventually we want to add other
material, like the euler problems and stuff that professors use in classes. If interested in helping out,
please read the style guide for adding problems either from codingbat(ones we haven't done yet are listed below),
OR your own problems. The style guide is below:

## Converting Coding bat exercises:
(Here's an example for adding this exercise)

1.  Pick an exercise- solve it in java/python, so you can see the test cases to use against the javascript version of your function. ![<3](/public/1.png)

2.  If you haven't already, git clone the repo and open the 3 files: 
  /server/server.js 
  /lib/setup.js
  /solutions.js

3.  After solving the exercise, rewrite the function in solutions.js (make sure the function works and you can comment the console logs out)
![<3](/public/2.png)

4.  Then add a new Exercises.insert method in **server.js** for the correct exercise. (note: you will need to run meteor reset to see the changes in server) Here's the example of warmup-2/stringTimes:![<3](/public/3.png)

5.  Good work! Now head on over to  **setup.js**. You need add the setup for the text to be thrown into codeMirror- here's the example: ![<3](/public/4.png)


6.  Last but not least- test test test test! Run a localhost version of meteor (remember to meteor reset first)- and checkout to see if your solution works through the ui: ![<3](/public/5.png)
  
7.  Puurrfect- now submit Pull Request, grab a beer, and be nice to your mum <3 

##### Please ask if you have any questions,
###### <3 <http://omari.io/>
 



