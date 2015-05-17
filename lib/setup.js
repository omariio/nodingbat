// This is a dedicated file for the setup field of each exercise object in server.js

setup = {}

setup.sleepIn = [
  "// The parameter weekday is True if it is a weekday, and the parameter",
  "// vacation is True if we are on vacation. We sleep in if it is not a",
  "// weekday or we are on vacation. Return True if we sleep in.",
  "\nvar sleepIn = function(weekday, vacation){ \n\n}"
].join("\n");

setup.diff21 = [
  "// Given an int n, return the absolute difference between n and 21,",
  "// except return double the absolute difference if n is over 21.",
  "\nvar diff21 = function(n){ \n\n}",
].join("\n");

setup.nearHundred = [
  "// Given an int n, return True if it is within 10 of 100 or 200.",
  "// Note: abs(num) computes the absolute value of a number.",
  "\nnearHundred = function(n){ \n\n}"
].join("\n");

setup.missingChar = [
  "// Given a non-empty string and an int n, return a new string",
  "// where the char at index n has been removed. The value of n",
  "// will be a valid index of a char in the original string",
  "// (i.e. n will be in the range 0..str.length()-1 inclusive).",
  "\nmissingChar = function(str, n){ \n\n}"
].join("\n");

setup.backAround = [
  "// Given a string, take the last char and return a new string with",
  "// the last char added at the front and back, so 'cat' yields 'tcatt'/",
  "// The original string will be length 1 or more.",
  "\nvar backAround = function(str){ \n\n}"
].join("\n");

setup.startHi = [
  "// Given a string, return true if the string starts with 'hi'",
  "// and false otherwise.",
  "\nvar startHi = function(str){ \n\n}"
].join("\n");

setup.hasTeen = [
  "// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.",
  "// Given 3 int values, return true if 1 or more of them are teen.",
  "\nvar hasTeen=function(a, b, c){ \n\n}"
].join("\n");
setup.mixStart = [
  "// Return true if the given string begins with 'mix', except the 'm' can be anything,",
  "//so 'pix', '9ix' .. all count.",
  "\nvar mixStart=function(str){ \n\n}"
].join('\n');

setup.close10 = [
  "// Given 2 int values, return whichever value is nearest to the value 10,",
  "// or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute",
  "// value of a number.",
  "\nvar close10=function(a, b){ \n\n}"
].join("\n");

setup.stringE = [
  "// Return true if the given string contains between 1 and 3 'e' chars.",
  "\nvar stringE=function(str){ \n\n}"
].join("\n");

setup.everyNth = [
  "// Given a non-empty string and an int N, return the string made starting with char 0,",
  "// and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on.",
  "// N is 1 or more.",
  "\nvar everyNth=function(str, n){ \n\n}"
].join("\n");
setup.monkeyTrouble = [
   "// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if",
   "// each is smiling. We are in trouble if they are both smiling or if neither of",
   "// them is smiling. Return true if we are in trouble.",
   "\nvar monkeyTrouble=function(aSmile, bSmile){ \n\n}"
].join("\n");
setup.parrotTrouble = [
  "// We have a loud talking parrot. The 'hour' parameter is the current hour",
  "// time in the range 0..23. We are in trouble if the parrot is talking and",
  "// the hour is before 7 or after 20.",
  "// Return True if we are in trouble.",
  "\nvar parrotTrouble=function(talking, hour) { \n\n}"
].join("\n");

setup.posNeg = [
  "// Given 2 int values, return True if one is negative and one is positive.",
  "// Except if the parameter 'negative' is True, then return True only if",
  "// both are negative.",
  "\nvar posNeg=function(a, b, negative) { \n\n}"
].join("\n");

setup.frontBack = [
  "// Given a string, return a new string where the first and last chars",
  "// have been exchanged.",
  "\nvar frontBack=function(str) { \n\n}"
].join("\n");

setup.or35 = [
  "// Return true if the given non-negative number is a multiple of 3",
  "// or a multiple of 5. (Hint: Use the % 'mod' operator)",
  "\nvar or35=function(n) { \n\n}"
].join("\n");
