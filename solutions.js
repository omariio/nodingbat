// Coding Bat Answers for warmup-1

// Java > Warmup-1 > sleepIn
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
solutions = {}

solutions.sleepIn = function(weekday, vacation) {
  return !weekday || vacation;
}

// Java > Warmup-1 > diff21
// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.
solutions.diff21 = function(n) {
  if (n <= 21) return 21 - n;
  else return (n - 21) * 2;
}

// Java > Warmup-1 > nearHundred
// Given an int n, return True if it is within 10 of 100 or 200.
// Note: abs(num) computes the absolute value of a number.
solutions.nearHundred = function(n) {
  return ((Math.abs(100 - n) <= 10) ||
    (Math.abs(200 - n) <= 10));
}

// Java > Warmup-1 > missingChar
//Given a non-empty string and an int n, return a new string where the char at
//index n has been removed. The value of n will be a valid index of a char in the
//original string (i.e. n will be in the range 0..str.length()-1 inclusive).
solutions.missingChar = function(str, n) {
  return str.substring(0, n) + str.substring(n + 1);
}
// console.log(missingChar("kitten", 1));
// console.log(missingChar("kitten", 0));

// Java > Warmup-1 > backAround
//Given a string, take the last char and return a new string with the last char added at
//the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.
solutions.backAround = function(str) {
  var last = str.slice(-1);
  return last + str + last;
}
// console.log(backAround("cat"));
// console.log(backAround("Hello"));
// console.log(backAround("a"));

// Java > Warmup-1 > startHi
// Given a string, return true if the string starts with "hi" and false otherwise.
solutions.startHi = function(str) {
  return !str.indexOf('hi');
}
// console.log(startHi("hi there"));
// console.log(startHi("hi"));
// console.log(startHi("hello hi"));

// Java > Warmup-1 > hasTeen
// We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// Given 3 int values, return true if 1 or more of them are teen.
solutions.hasTeen = function(a, b, c) {
  return !![a, b, c].filter(function(n) {return n >= 13 && n <= 19}).length;
}
// console.log(solutions.hasTeen(13, 20, 10));
// console.log(solutions.hasTeen(20, 19, 10));
// console.log(solutions.hasTeen(20, 10, 13));

// Java > Warmup-1 > mixStart
// Return true if the given string begins with "mix", except the 'm' can be anything,
//so "pix", "9ix" .. all count.
solutions.mixStart = function(str) {
  return str.indexOf('ix') === 1;
}
// console.log(mixStart("mix snacks"));
// console.log(mixStart("piz snacks"));

// Java > Warmup-1 > close10
// Given 2 int values, return whichever value is nearest to the value 10,
// or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value
// of a number.
solutions.close10 = function(a, b) {
  var aDiff = Math.abs(a - 10);
  var bDiff = Math.abs(b - 10);

  if (aDiff < bDiff) return a;
  if (bDiff < aDiff) return b;
  return 0;
}
// console.log(close10(8,13));
// console.log(close10(13,8));

// Java > Warmup-1 > stringE
// Return true if the given string contains between 1 and 3 'e' chars.
solutions.stringE = function(str) {
  var eCount = str.replace(/[^e]/g, '').length;
  return (eCount >= 1 && eCount <= 3);
}
// console.log(stringE("Hello"));
// console.log(stringE("Heelle"));
// console.log(stringE("Heelele"));

// Java > Warmup-1 > everyNth
// Given a non-empty string and an int N, return the string made starting with char 0,
// and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on.
// N is 1 or more.
solutions.everyNth = function(str, n) {
  return str.split('').filter(function(c, i) {return !(i % n)}).join('');
}
// console.log(everyNth("Miracle", 2));
// console.log(everyNth("abcdefg", 2));
// console.log(everyNth("abcdefg", 3));

// Java > Warmup-1 > monkeyTrouble
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each
// is smiling. We are in trouble if they are both smiling or if neither of them is smiling.
// Return true if we are in trouble.
solutions.monkeyTrouble = function(aSmile, bSmile) {
  return aSmile === bSmile;
}
// console.log(monkeyTrouble(true, true));
// console.log(monkeyTrouble(false, false));
// console.log(monkeyTrouble(true, false));

// Java > Warmup-1 > parrotTrouble
// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
//We are in trouble if the parrot is talking and the hour is before 7 or after 20.
//Return True if we are in trouble.
solutions.parrotTrouble = function(talking, hour) {
  return talking && (hour < 7 || hour > 20);
}
// console.log(parrotTrouble(true, 6));
// console.log(parrotTrouble(true, 7));
// console.log(parrotTrouble(false, 6));

// Java > Warmup-1 > posNeg
//Given 2 int values, return True if one is negative and one is positive.
//Except if the parameter "negative" is True, then return True only if
//both are negative.
solutions.posNeg = function(a, b, negative) {
  if (negative) return a < 0 && b < 0;
  return (a < 0 && b > 0) || (a > 0 && b < 0);
};
// console.log(posNeg(1, -1, false));
// console.log(posNeg(-1, 1, false));
// console.log(posNeg(-4, -5, true));

// Java > Warmup-1 > frontBack
// Given a string, return a new string where the first and last chars have been exchanged.
solutions.frontBack = function(str) {
  if (str.length < 2) return str;
  return str.slice(-1) + str.slice(0, -1) + str[0];
}

//console.log(solutions.frontBack("code"));
//console.log(solutions.frontBack("a"));
//console.log(solutions.frontBack("ab"));

// Java > Warmup-1 > or35
// Return true if the given non-negative number is a multiple of 3 or a multiple of 5.
//Use the % "mod" operator
solutions.or35 = function(n) {
  return (!(n % 3) || !(n % 5));
}
// console.log(or35(3));
// console.log(or35(10));
// console.log(or35(8));

// Java > Warmup-1 > icyHot
// Given two temperatures, return true if one is less than 0 and the other is greater than 100.
solutions.icyHot = function(temp1, temp2) {
  return (temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100);
}
// console.log(icyHot(120, -1));
// console.log(icyHot(-1, 120));
// console.log(icyHot(2, 120));

// Java > Warmup-1 > loneTeen
// We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// Given 2 int values, return true if one or the other is teen, but not both.
solutions.loneTeen = function(a, b) {
  var isTeen = function(n) {return n >= 13 && n <= 19};
  return isTeen(a) !== isTeen(b);
}

// console.log(loneTeen(13, 99));
// console.log(loneTeen(21, 19));
// console.log(loneTeen(13, 13));

// Java > Warmup-1 > startOz
// Given a string, return a string made of the first 2 chars (if present),
// however include first char only if it is 'o' and include the second only if it is 'z',
// so "ozymandias" yields "oz".
solutions.startOz = function(str) {
  result = '';
  if (str[0] === 'o') result += 'o';
  if (str[1] === 'z') result += 'z';
  return result;
}
// console.log(startOz("ozymandias"));
// console.log(startOz("bzoo"));
// console.log(startOz("oxx"));

// Java > Warmup-1 > in3050
// Given 2 int values, return true if they are both in the range 30..40 inclusive,
// or they are both in the range 40..50 inclusive.
solutions.in3050 = function(a, b) {
  var inRange = function(n) {return n >= 0 && n <= 10};
  return (inRange(a - 30) && inRange(b - 30)) || (inRange(a - 40) && inRange(b - 40));
}
// console.log(in3050(30, 31));
// console.log(in3050(30, 41));
// console.log(in3050(40, 50));

// Java > Warmup-1 > lastDigit
// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.
solutions.lastDigit = function(a, b) {
  return a % 10 === b % 10;
}
// console.log(lastDigit(7,17));
// console.log(lastDigit(6,17));
// console.log(lastDigit(3,113));

// Java > Warmup-1 > sumDouble
// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
solutions.sumDouble = function(a, b) {
  return (a === b) ? 2 * (a + b) : a + b;
}
// console.log(sumDouble(1,2));
// console.log(sumDouble(3,2));
// console.log(sumDouble(2,2));

// Java > Warmup-1 > makes10
// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
solutions.makes10 = function(a, b) {
  return (a == 10 || b == 10) || (a + b == 10);
}
// console.log(makes10(9,10));
// console.log(makes10(9,9));
// console.log(makes10(1,9));

// Java > Warmup-1 > notString
// Given a string, return a new string where "not " has been added to the front.
// However, if the string already begins with "not", return the string unchanged.
solutions.notString = function(str) {
  if (!str.indexOf('not')) return str;
  else return "not " + str;
}
// console.log(notString("candy"));
// console.log(notString("x"));
// console.log(notString("not bad"));

// Java > Warmup-1 > front3
// Given a string, we'll say that the front is the first 3 chars of the string.
// If the string length is less than 3, the front is whatever is there.
// Return a new string which is 3 copies of the front.
solutions.front3 = function(str) {
  var front = str.substr(0, 3);
  return front + front + front;
}
// console.log(front3("Java"));
// console.log(front3("Chocolate"));
// console.log(front3("abc"));

// Java > Warmup-1 > front22
// Given a string, take the first 2 chars and return the string with the 2 chars added at both the
// front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever
// chars are there.
solutions.front22 = function(str) {
  var front = str.substr(0, 2);
  return front + str + front;
}
// console.log(front22("kitten"));
// console.log(front22("Ha"));
// console.log(front22("abc"));

// Java > Warmup-1 > in1020
// Given 2 int values, return true if either of them is in the range 10..20 inclusive.
solutions.in1020 = function(a, b) {
  var inRange = function(n){return n >= 10 && n <= 20};
  return inRange(a) || inRange(b);
}
// console.log(in1020(12,99));
// console.log(in1020(21,12));
// console.log(in1020(8,99));

// Java > Warmup-1 > delDel
// Given a string, if the string "del" appears starting at index 1, return a string where that "del"
// has been deleted. Otherwise, return the string unchanged.
solutions.delDel = function(str) {
  return (str.indexOf('del') === 1) ? str[0] + str.substr(4) : str;
}

// console.log(solutions.delDel("adelbc"));
// console.log(solutions.delDel("adelHello"));
// console.log(solutions.delDel("adebc"));

// Java > Warmup-1 > intMax
// Given three int values, a b c, return the largest.
solutions.intMax = function(a, b, c) {
  return Math.max(a, b, c);
}
// console.log(intMax(1,2,3));
// console.log(intMax(1,3,2));
// console.log(intMax(3,2,1));

// Java > Warmup-1 > max1020
// Given 2 positive int values, return the larger value that is in the range 10..20
// inclusive, or return 0 if neither is in that range.
solutions.max1020 = function(a, b) {
  var between1020 = function(n){return (10 <= n && n <= 20) ? n : 0};
  return Math.max(between1020(a), between1020(b));
}
// console.log(max1020(11,19));
// console.log(max1020(19,11));
// console.log(max1020(11,9));

// Java > Warmup-1 > endUp
// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that
// str.toUpperCase() returns the uppercase version of a string.
solutions.endUp = function(str) {
  return str.slice(0, -3) + str.slice(-3).toUpperCase();
}
// console.log(endUp("Hello"));
// console.log(endUp("hi there"));
// console.log(endUp("hi"));









// Java > String-1 > helloName
// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
solutions.helloName = function(name) {
  return "Hello " + name;
}
// console.log(helloName("bob"));
// console.log(helloName("Alice"));

// Java > String-1 > makeAbba
// Given two strings, a and b, return the result of putting them together in the
// order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
solutions.makeAbba = function(a, b) {
  return a + b + b + a;
}
// console.log(solutions.makeAbba("Hi", "Bye"));
// console.log(makeAbba("Yo", "Alice"));
// console.log(makeAbba("What", "Up"));

// Java > String-1 > makeTags
// The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text.
// In this example, the "i" tag makes <i> and </i> which surround the word "Yay".
// Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
solutions.makeTags = function(tag, word) {
  return "<" + tag + ">" + word + "</" + tag + ">";
}
// console.log(solutions.makeTags("i", "Yay"));
// console.log(solutions.makeTags("i", "Hello"));
// console.log(solutions.makeTags("cite", "Yay"));

// Java > String-1 > makeOutWord
// Given an "out" string length 4, such as "<<>>", and a word, return a new string where
// the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j)
// to extract the String starting at index i and going up to but not including index j.
solutions.makeOutWord = function(out, word) {
  return out.slice(0, 2) + word + out.slice(2, 4);
}
// console.log(solutions.makeOutWord("<<>>", "Yay"));
// console.log(solutions.makeOutWord("<<>>", "WooHoo"));
// console.log(solutions.makeOutWord("[[]]", "word"));

// Java > String-1 > extraEnd
// Given a string, return a new string made of 3 copies of the last 2 chars
// of the original string. The string length will be at least 2.
solutions.extraEnd = function(str) {
  return str.slice(-2).repeat(3);
}
// console.log(solutions.extraEnd("Hello"));
// console.log(solutions.extraEnd("ab"));
// console.log(solutions.extraEnd("Hi"));

// Java > String-1 > withoutEnd
// Given a string, return a version without the first and last char, so "Hello" yields "ell".
// The string length will be at least 2.
solutions.withoutEnd = function(str) {
  return str.slice(1, -1);
}
// console.log(solutions.withoutEnd("Hello"));
// console.log(solutions.withoutEnd("java"));
// console.log(solutions.withoutEnd("coding"));

// Java > String-1 > comboString
// Given 2 strings, a and b, return a string of the form short+long+short, with
// the shorter string on the outside and the longer string on the inside. The
// strings will not be the same length, but they may be empty (length 0).
solutions.comboString = function(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}
// console.log(solutions.comboString("Hello", "hi"));
// console.log(solutions.comboString("hi", "Hello"));
// console.log(solutions.comboString("aaa", "b"));

// Java > String-1 > nonStart
// Given 2 strings, return their concatenation, except omit the first char
// of each. The strings will be at least length 1.
solutions.nonStart = function(a, b) {
  return a.substr(1) + b.substr(1);
}
// console.log(solutions.nonStart("Hello", "There"));
// console.log(solutions.nonStart("java", "code"));
// console.log(solutions.nonStart("shotl", "java"));

// Java > String-1 > firstHalf
// Given a string of even length, return the first half.
// So the string "WooHoo" yields "Woo".
solutions.firstHalf = function(str) {
  return str.length % 2 ? str : str.slice(0, str.length / 2);
}
// console.log(firstHalf("WooHoo"));
// console.log(firstHalf("HelloThere"));
// console.log(firstHalf("abcdef"));

// Java > String-1 > firstTwo
// Given a string, return the string made of its first two chars, so the String
// "Hello" yields "He". If the string is shorter than length 2, return whatever
// there is, so "X" yields "X", and the empty string "" yields the
// empty string "". Note that str.length() returns the length of a string.
solutions.firstTwo = function(str) {
  return str.slice(0, 2);
}
// console.log(solutions.firstTwo("Hello"));
// console.log(solutions.firstTwo("ab"));

// Java > String-1 > left2
// Given a string, return a "rotated left 2" version where the first 2 chars are
// moved to the end. The string length will be at least 2.
solutions.left2 = function(str) {
  return str.slice(2) + str.slice(0, 2);
}
// console.log(solutions.left2("Hello"));
// console.log(solutions.left2("java"));
// console.log(solutions.left2("Hi"));

// Java > String-1 > right2
// Given a string, return a "rotated right 2" version where the last 2 chars are
// moved to the start. The string length will be at least 2.
solutions.right2 = function(str) {
  return str.slice(-2) + str.slice(0, -2);
}
// console.log(solutions.right2("Hello"));
// console.log(solutions.right2("java"));
// console.log(solutions.right2("Hi"));

// Java > String-1 > theEnd
// Given a string, return a string length 1 from its front, unless front is false,
// in which case return a string length 1 from its back. The string will be non-empty.
solutions.theEnd = function(str, front) {
  return front ? str[0] : str.slice(-1);
}

// Java > String-1 > withouEnd2
// Given a string, return a version without both the first and last char of the
// string. The string may be any length, including 0.
solutions.withoutEnd2 = function(str) {
  return str.slice(1, -1);
}

// Java > String-1 > middleTwo
// Given a string of even length, return a string made of the middle two chars,
// so the string "string" yields "ri". The string length will be at least 2.
solutions.middleTwo = function(str) {
  return str.length % 2 ? str : str.substr(str.length / 2 - 1, 2);
}
// console.log(solutions.middleTwo("string"));
// console.log(solutions.middleTwo("code"));
// console.log(solutions.middleTwo("Practice"));

// Java > String-1 > endsLy
// Given a string, return true if it ends in "ly".
solutions.endsLy = function(str) {
  return (str.slice(-2) === "ly");
}
// console.log(solutions.endsLy("oddly"));
// console.log(solutions.endsLy("y"));
// console.log(solutions.endsLy("oddy"));
// console.log(solutions.endsLy("oddl"));
// console.log(solutions.endsLy("olydd"));
// console.log(solutions.endsLy("ly"));
// console.log(solutions.endsLy("falsely"));
// console.log(solutions.endsLy("evenly"));

// Java > String-1 > nTwice
// Given a string and an int n, return a string made of the first and last n chars
// from the string. The string length will be at least n.
solutions.nTwice = function(str, n) {
  return str.slice(0, n) + str.slice(-1 * n);
}
// console.log(solutions.nTwice("hello", 2));
// console.log(solutions.nTwice("Chocolate", 3));
// console.log(solutions.nTwice("Chocolate", 1));
// console.log(solutions.nTwice("Chocolate", 0));
// console.log(solutions.nTwice("Hello", 4));
// console.log(solutions.nTwice("Code", 4));
// console.log(solutions.nTwice("Code", 2));

// Java > String-1 > twoChar
// Given a string and an index, return a string length 2 starting at the given index.
// If the index is too big or too small to define a string length 2, use the first
// 2 chars. The string length will be at least 2.
solutions.twoChar = function(str, index){
	if (index > str.length - 2) {
		index = 0;
	}
	return str.substr(index, 2);
}
// console.log(solutions.twoChar("java", 0));
// console.log(solutions.twoChar("java", 2));
// console.log(solutions.twoChar("java", 3));

// Java > String-1 > middleThree
// Given a string of odd length, return the string length 3 from its middle, so
// "Candy" yields "and". The string length will be at least 3.
solutions.middleThree = function(str){
	return str.substr((str.length/2)-1, 3);
}
// console.log(solutions.middleThree("Candy"));
// console.log(solutions.middleThree("and"));
// console.log(solutions.middleThree("solving"));
// console.log(solutions.middleThree(""));
// console.log(solutions.middleThree("a"));

// Java > Warmup-2 > stringTimes
// Given a string and a non-negative int n, return a larger string that is n
// copies of the original string.
solutions.stringTimes = function(str, n) {
  return str.repeat(n);
}
// console.log(solutions.stringTimes("Hi", 2));
// console.log(solutions.stringTimes("Hi", 3));
// console.log(solutions.stringTimes("Hi", 1));

// Java > Warmup-2 > doubleX
// Given a string, return true if the first instance of "x" in the string is
// immediately followed by another "x".
solutions.doubleX = function(str) {
  var i = str.indexOf('x');
  return i >= 0 && i === str.indexOf('xx');
}
// console.log(solutions.doubleX("axxbb"));
// console.log(solutions.doubleX("axaxax"));
// console.log(solutions.doubleX("xxxxxx"));

// Java > Warmup-2 > last2
// Given a string, return the count of the number of times that a substring
// length 2 appears in the string and also as the last 2 chars of the string,
// so "hixxxhi" yields 1 (we won't count the end substring).

solutions.last2 = function(str) {
  var count = 0;
  if (str.length < 2) return 0;
  var end = str.slice(-2);
  for (x = 0; x < str.length - 2; x++) {
    if (str.substr(x, 2) === end) count++;
  }
  return count;
}
// console.log(solutions.last2('hixxhi'));
// console.log(solutions.last2('xaxxaxaxx'));
// console.log(solutions.last2('axxxaaxx'));
// console.log(solutions.last2('xxaxxaxxaxx'));

// Java > Warmup-2 > array123
// Given an array of ints, return true if .. 1, 2, 3, .. appears in the array somewhere.
solutions.array123 = function(nums) { //TODO not added
  for (var x=0; nums.length >= 3 && x <= nums.length-2; x++){
  	if(nums[x] === 1 && nums[x+1] === 2 && nums[x+2] === 3){
  		return true;
  	}
	}
	return false;
}
// console.log(solutions.array123([1,2,3]));
// console.log(solutions.array123([1,1,2,3,1]));
// console.log(solutions.array123([1,1,2,4,1]));
// console.log(solutions.array123([1,1,2,1,1,2,3]));

// Java > Warmup-2 > altPairs
// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ...
// so "kittens" yields "kien".
solutions.altPairs = function(str) {
  var newStr = '';
  for (var i = 0; i * 2 < str.length; i += 2) {
    newStr += str.substr(i * 2, 2);
  }
  return newStr;
  //alt solution:
  //return str.split('').filter((c,i)=>!(~~(i/2)%2)).join('');
}
// console.log(solutions.altPairs('kitten'));
// console.log(solutions.altPairs('Chocolate'));
// console.log(solutions.altPairs('CodingHorror'));

// Java > Warmup-2 > noTriples
// Given an array of ints, we'll say that a triple is a value appearing
// 3 times in a row in the array. Return true if the array does not contain
// any triples.
solutions.noTriples = function(nums) {
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) return false;
  }
  return true;
}
// console.log(solutions.noTriples([1,1,2,2,1]));
// console.log(solutions.noTriples([1,1,2,2,2,1]));
// console.log(solutions.noTriples([1,1,1,2,2,2,1]));

// Java > Warmup-2 > frontTimes
// Given a string and a non-negative int n, we'll say that the front of the string is
// the first 3 chars, or whatever is there if the string is less than length 3.
// Return n copies of the front;

solutions.frontTimes = function(str, n) {
  return str.slice(0, 3).repeat(n);
}
// console.log(solutions.frontTimes('Chocolate', 2));
// console.log(solutions.frontTimes('Chocolate', 3));
// console.log(solutions.frontTimes('Abc', 3));

// Java > Warm-Up2 > stringBits
// Given a string, return a new string made of every other char
// starting with the first, so "Hello" yields "Hlo".
solutions.stringBits = function(str) {
  return str.split('').filter(function(c, i){return !(i % 2)}).join('');
}
// console.log(solutions.stringBits('Hello'));
// console.log(solutions.stringBits('Hi'));
// console.log(solutions.stringBits('Heeololeo'));

// Warmup-Up2 > arrayCount9
// Given an array of ints, return the number of 9's in the array.
solutions.arrayCount9 = function(nums) {
  return nums.filter(function(n){return n === 9}).length;
}
// console.log(solutions.arrayCount9([1,2,9]));
// console.log(solutions.arrayCount9([1,9,9]));
// console.log(solutions.arrayCount9([1,9,9,3,9]));

// Warm-Up2 > stringMatch
// Given 2 strings, a and b, return the number of the positions where they contain
// the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx",
// "aa", and "az" substrings appear in the same place in both strings.
solutions.stringMatch = function(a, b) {
	return a.reduce(function(s,e,i) {
		return s + (a.substr(i, 2) === b.substr(i, 2));
	}, 0);
}
// console.log(solutions.stringMatch('xxcaazz', 'xxbaaz'));
// console.log(solutions.stringMatch('abc', 'abc'));
// console.log(solutions.stringMatch('abc', 'axc'));
// console.log(solutions.stringMatch('abcdef', 'ab'));
// console.log(solutions.stringMatch('abc', 'abcdef'));

// Warm-Up2 > stringYak
// Suppose the string "yak" is unlucky. Given a string, return a version where all
// the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.
solutions.stringYak = function(str) {
  return str.replace(/y.k/g, '');
}
// console.log(solutions.stringYak('yakpak'));
// console.log(solutions.stringYak('pakyak'));
// console.log(solutions.stringYak('yak123ya'));

// Warm-Up2 > has271
// Given an array of ints, return true if it contains a 2, 7, 1 pattern -- a value,
// followed by the value plus 5, followed by the value minus 1. Additionally the 271
// counts even if the "1" differs by 2 or less from the correct value.
solutions.has271 = function(nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] !== nums[i] + 5) continue;
    if (Math.abs(nums[i + 2] - (nums[i] - 1)) <= 2) return true;
  }
  return false;
}
// console.log(solutions.has271([2,7,1]));
// console.log(solutions.has271([1,2,7,1]));
// console.log(solutions.has271([1,2,8,1]));
// console.log(solutions.has271([2,7,1]));

// Warm-Up2 > countXX
// Count the number of "xx" in the given string. We'll say that overlapping is allowed,
// so "xxx" contains 2 "xx".
solutions.countXX = function(str) {
  var count = 0;
  for (var i = 0; i < str.length - 1; i++) {
    if (str.substr(i, 2) === 'xx') count++;
  }
  return count;
}
// console.log(solutions.countXX('abcxx'));
// console.log(solutions.countXX('xxx'));
// console.log(solutions.countXX('xxxx'));

// Warm-Up2 > stringSplosion
// Given a non-empty string like "Code" return a string like "CCoCodCode".
solutions.stringSplosion = function(str) { //TODO not added
  result = "";
  for (x = 0; x < str.length - 1; x++) {
    result += str.slice(0, x + 1);
  }
  return result;
  // return str.split('').reduce((s, e, i) => s + str.slice(0, i + 1), '');
}
// console.log(solutions.stringSplosion("Code"));
// console.log(solutions.stringSplosion("abc"));
// console.log(solutions.stringSplosion("aab"));

// Warm-Up2 > arrayFront9
// Given an array of ints, return true if one of the first 4 elements in
// the array is a 9. The array length may be less than 4
solutions.arrayFront9 = function(nums) {
  for (i = 0; i < 4 && i < nums.length; i++) {
    if (nums[i] === 9) return true;
  }
  return false;
}
// console.log(solutions.arrayFront9([1,2,9,3,4]));
// console.log(solutions.arrayFront9([1,2,3,4,9]));
// console.log(solutions.arrayFront9([1,2,3,4,5]));

// Warm-Up2 > stringX
// Given a string, return a version where all the "x" have been removed.
// Except an 'x' at the very start or end should not be removed.
solutions.stringX = function(str) {
  var front = str.slice(0, 1);
  var mid = str.slice(1, str.length - 1).replace(/x/g, '');
  var end = str.slice(-1);
  return front + mid + end;
}
// console.log(solutions.stringX("xxHxix"));
// console.log(solutions.stringX("abxxxcd"));
// console.log(solutions.stringX("xabxxxcdx"));

// Warmup-Up2 > array667
// Given an array of ints, return the number of times that two 6's
// are next to each other in the array. Also count instances where
// the second "6" is actually a 7.
solutions.array667 = function(nums) {
  var count = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] === 6) {
      if (nums[x + 1] === 6 || nums[x + 1] === 7) {
        count++;
      }
    }
  }
  return count;
}
// console.log(solutions.array667([6,6,2]));
// console.log(solutions.array667([6,6,2,6]));
// console.log(solutions.array667([6,7,2,6]));
// console.log(solutions.array667([6,6,2,7,6,7]));








// Given a string of letters, write a function that outputs string of 1's
// and 0's of the same size corresponding to if a selected letter is in
// that position of the input string. Be sure to make x and input lowercase.
// For example isHere('l', 'hello') would output 00110.
solutions.isHere = function(x, input) {
  x = x.toLowerCase();
  input = input.toLowerCase();
  return input.split('').map(function(c){return +(c === x)}).join('');
}
// console.log(solutions.isHere("l", "hello"));
// console.log(solutions.isHere("I", "I am I and you are I"));

// Given an array of strings, find the longest common prefix each string has.
// i.e. a list of yes, yodel, yeah should output y.
solutions.biggestPre = function(input) {
	for (var i = 0; i < input[0].length; i++) {
    for (var x = 1; x < input.length; x++) {
      if (i >= input[x].length || input[x][i] !== input[0][i])
        return input[0].slice(0,i);
    }
  }
  return input[0];
}
// test = ["we", "were", "me", "went", "why", "you"]
// test2 = ["we", "were", "we", "went", "why", "wou"]
// test3 = ['me', 'meat', 'meander', 'mexico'];
//
// console.log(solutions.biggestPre(test));
// console.log(solutions.biggestPre(test2));
// console.log(solutions.biggestPre(test3));
