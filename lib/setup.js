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

setup.icyHot = [
  "// Given two temperatures, return true if one is less than 0 and ",
  "// the other is greater than 100.",
  "\nvar icyHot=function(temp1, temp2) { \n\n}"
].join("\n");

setup.loneTeen = [
  "// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.",
  "// Given 2 int values, return true if one or the other is teen, but not both",
  "\nvar loneTeen=function(a, b) { \n\n}"
].join("\n");

setup.startOz = [
  "// Given a string, return a string made of the first 2 chars (if present),",
  "// however include first char only if it is 'o' and include the second only",
  "// if it is 'z', so 'ozymandias' yields 'oz'.",
  "\nvar startOz=function(str) { \n\n}"
].join("\n");

setup.in3050 = [
  "// Given 2 int values, return true if they are both in the range 30..40 inclusive,",
  "// or they are both in the range 40..50 inclusive.",
  "\nvar in3050=function(a ,b) { \n\n}"
].join("\n");

setup.lastDigit = [
  "// Given two non-negative int values, return true if they have the same last digit,",
  "// such as with 27 and 57. Note that the % 'mod' operator computes remainders,",
  "// so 17 % 10 is 7.",
  "\nvar lastDigit=function(a ,b) { \n\n}"
].join("\n");

setup.sumDouble = [
  "// Given two int values, return their sum. Unless the two values are the same,",
  "// then return double their sum.",
  "\nvar sumDouble=function(a ,b) { \n\n}"
].join("\n");

setup.makes10 = [
  "// Given 2 ints, a and b, return true if one if them is 10",
  "or if their sum is 10.",
  "\nvar makes10=function(a ,b) { \n\n}"
].join("\n");

setup.notString = [
  "// Given a string, return a new string where 'not' has been added to the front.",
  "// However, if the string already begins with 'not', return the string unchanged.",
  "// Note: use .equals() to compare 2 strings.",
  "\nvar notString=function(str) { \n\n}"
].join("\n");

setup.front3 = [
  "// Given a string, we'll say that the front is the first 3 chars of the string.",
  "// If the string length is less than 3, the front is whatever is there.",
  "// Return a new string which is 3 copies of the front.",
  "\nvar front3=function(str) { \n\n}"
].join("\n");

setup.front22 = [
  "// Given a string, take the first 2 chars and return the string with the 2",
  "// chars added at both the // front and back, so 'kitten' yields 'kikittenki'",
  "// chars are there.",
  "\nvar front22=function(str) { \n\n}"
].join("\n");

setup.in1020 = [
  "// Given 2 int values, return true if either of them is in the range 10..20 inclusive.",
  "\nvar in1020=function(a, b) { \n\n}"
].join("\n");

setup.intMax = [
  "// Given three int values, a b c, return the largest.",
  "\nvar intMax=function(a, b, c) { \n\n}"
].join("\n");

setup.max1020 = [
  "// Given 2 positive int values, return the larger value that is in the range 10..20",
  "// inclusive, or return 0 if neither is in that range.",
  "\nvar max1020=function(a, b) { \n\n}"
].join("\n");

setup.endUp = [
  "// Given a string, return a new string where the last 3 chars are now in upper case.",
  "// If the string has less than 3 chars, uppercase whatever is there. Note that",
  "// str.toUpperCase() returns the uppercase version of a string.",
  "\nvar endUp=function(str) { \n\n}"
].join("\n");

// setup for string-1 java problems
setup.helloName = [
  "// Given a string name, e.g. 'bob', return a greeting of the form 'Hello Bob!.",
  "\nvar helloName=function(name) { \n\n}"
].join("\n");

setup.makeAbba = [
  "// Given two strings, a and b, return the result of putting them together in the",
  "// order abba, e.g. 'Hi' and 'Bye' returns 'HiByeByeHi'.",
  "\nvar makeAbba=function(a, b) { \n\n}"
].join("\n");

setup.makeTags = [
  "// The web is built with HTML strings like '<i>Yay</i>' which draws Yay as italic text.",
  "// In this example, the 'i' tag makes <i> and </i> which surround the word 'Yay'.",
  "// Given tag and word strings, create the HTML string with tags around the word,",
  "//  e.g. '<i>Yay</i>'",
  "\nvar makeTags=function(tag, word) { \n\n}"
].join("\n");

setup.makeOutWord = [
  "// Given an 'out' string length 4, such as '<<>>', and a word, return a new string where",
  "// the word is in the middle of the out string, e.g. '<<word>>'. Note: use str.substring(i, j)",
  "// to extract the String starting at index i and going up to but not including index j.",
  "\nvar makeOutWord=function(out, word) { \n\n}"
].join("\n");

setup.extraEnd = [
  "// Given a string, return a new string made of 3 copies of the last 2 chars",
  "// of the original string. The string length will be at least 2.",
  "\nvar extraEnd=function(str) { \n\n}"
].join("\n");

setup.withoutEnd = [
  "// Given a string, return a version without the first and last char, so 'Hello' yields 'ell'.",
  "\nvar withoutEnd=function(str) { \n\n}"
].join("\n");

setup.comboString = [
  "// Given 2 strings, a and b, return a string of the form short+long+short, with",
  "// the shorter string on the outside and the longer string on the inside. The",
  "// strings will not be the same length, but they may be empty (length 0).",
  "\nvar comboString=function(a, b) { \n\n}"
].join("\n");

setup.nonStart = [
  "// Given 2 strings, return their concatenation, except omit the first char",
  "// of each. The strings will be at least length 1.",
  "\nvar nonStart=function(a, b) { \n\n}"
].join("\n");

setup.firstHalf = [
  "// Given a string of even length, return the first half.",
  "// So the string 'WooHoo' yields 'Woo'.",
  "\nvar firstHalf=function(str) { \n\n}"
].join("\n");

setup.firstTwo = [
  "// Given a string, return the string made of its first two chars, so the String",
  "// 'Hello' yields 'He'. If the string is shorter than length 2, return whatever",
  "\nvar firstTwo=function(str) { \n\n}"
].join("\n");

setup.left2 = [
  "// Given a string, return a 'rotated left 2' version where the first 2 chars are",
  "// moved to the end. The string length will be at least 2.",
  "\nvar left2=function(str) { \n\n}"
].join("\n");

setup.right2 = [
  "// Given a string, return a 'rotated right 2' version where the last 2 chars are",
  "// moved to the start. The string length will be at least 2.",
  "\nvar right2=function(str) { \n\n}"
].join("\n");

setup.theEnd = [
  "// Given a string, return a string length 1 from its front, unless front is false,",
  "// in which case return a string length 1 from its back. The string will be non-em",
  "\nvar theEnd=function(str, front) { \n\n}"
].join("\n");

setup.withouEnd2 = [
  "// Given a string, return a version without both the first and last char of the",
  "// string. The string may be any length, including 0.",
  "\nvar withouEnd2=function(str) { \n\n}"
].join("\n");

setup.middleTwo = [
  "// Given a string of even length, return a string made of the middle two chars,",
  "// so the string 'string' yields 'ri'. The string length will be at least 2.",
  "\nvar middleTwo=function(str) { \n\n}"
].join("\n");

setup.endsLy = [
  "// Given a string, return true if it ends in 'ly'.",
  "\nvar endsLy=function(str) { \n\n}"
].join("\n");
