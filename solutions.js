// Coding Bat Answers for warmup-1

// Java > Warmup-1 > sleepIn
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
solutions = {}

solutions.sleepIn = function(weekday, vacation) {
	return !weekday || vacation;
}

// Java > Warm-up1 > diff21
// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.
solutions.diff21 = function(n) {
  if (n <= 21){
    return 21 - n;
  }
  else{
    return (n - 21) * 2;
  }
}

// Java > Warm-up1 > nearHundred
// Given an int n, return True if it is within 10 of 100 or 200.
// Note: abs(num) computes the absolute value of a number.
solutions.nearHundred = function(n) {
  if (Math.abs(100) - n <= 10 || Math.abs(200) - n <= 10){
    return true;
  } else {
    return false;
  }
}
// console.log(nearHundred(93));
// console.log(nearHundred(90));
// console.log(nearHundred(89));

// Java > Warm-up1 > missingChar
//Given a non-empty string and an int n, return a new string where the char at
//index n has been removed. The value of n will be a valid index of a char in the
//original string (i.e. n will be in the range 0..str.length()-1 inclusive).
solutions.missingChar = function(str, n) {
	front = str.substring(0,n);
	back = str.substring(n+1, str.length);
	return front + back;
}
// console.log(missingChar("kitten", 1));
// console.log(missingChar("kitten", 0));

// Java > Warm-up1 > backAround
//Given a string, take the last char and return a new string with the last char added at
//the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.
solutions.backAround = function(str){
	last = str.substring(str.length-1);
	return last + str + last;
}
// console.log(backAround("cat"));
// console.log(backAround("Hello"));
// console.log(backAround("a"));

// Java > Warm-up1 > startHi
// Given a string, return true if the string starts with "hi" and false otherwise.
solutions.startHi =  function(str){
	if (str.length < 2){
		return false;
	}
	front = str.substring(0,2);
	if (front == "hi"){
		return true;
	}
	else {
		return false;
	}
}
// console.log(startHi("hi there"));
// console.log(startHi("hi"));
// console.log(startHi("hello hi"));

// Java > Warm-up1 > hasTeen
// We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// Given 3 int values, return true if 1 or more of them are teen.
solutions.hasTeen = function(a, b, c){
	return (a>=13 && a<=19) || (b>=13 && b<=19) || (c>=13 && c<=19);
}
// console.log(solutions.hasTeen(13, 20, 10));
// console.log(solutions.hasTeen(20, 19, 10));
// console.log(solutions.hasTeen(20, 10, 13));

// Java > Warm-up1 > mixStart
// Return true if the given string begins with "mix", except the 'm' can be anything,
//so "pix", "9ix" .. all count.
solutions.mixStart = function(str){
	if (str.length<3){
		return false;
	}
	two = str.substring(1,3);
	if (two == "ix"){
		return true;
	}
	else{
		return false;
	}
}
// console.log(mixStart("mix snacks"));
// console.log(mixStart("piz snacks"));

// Java > Warm-up1 > close10
// Given 2 int values, return whichever value is nearest to the value 10,
// or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value
// of a number.
solutions.close10 = function(a, b){
	aDiff = Math.abs(a-10);
	bDiff = Math.abs(b-10);

	if (aDiff < bDiff){
		return a;
	}
	if (bDiff < aDiff){
		return b;
	}
	return 0;
}
// console.log(close10(8,13));
// console.log(close10(13,8));

// Java > Warm-up1 > stringE
// Return true if the given string contains between 1 and 3 'e' chars.
solutions.tringE = function(str){
	count = 0;
	for(var i=0; i<str.length; i++){
		if(str.charAt(i) == "e"){
			count++;
		}
	}
	return (count >= 1 && count <= 3);
}
// console.log(stringE("Hello"));
// console.log(stringE("Heelle"));
// console.log(stringE("Heelele"));

// Java > Warm-up1 > everyNth
// Given a non-empty string and an int N, return the string made starting with char 0,
// and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on.
// N is 1 or more.
solutions.everyNth = function(str, n){
	result = "";
	for(var i=0; i<str.length; i = i + n){
		result = result + str.charAt(i);
	}
	return result;
}
// console.log(everyNth("Miracle", 2));
// console.log(everyNth("abcdefg", 2));
// console.log(everyNth("abcdefg", 3));

// Java > Warm-up1 > monkeyTrouble
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each
// is smiling. We are in trouble if they are both smiling or if neither of them is smiling.
// Return true if we are in trouble.
solutions.monkeyTrouble = function(aSmile, bSmile){
	if(aSmile && bSmile){
		return true;
	}
	if(!aSmile && !bSmile){
		return true;
	}
	return false;
}
// console.log(monkeyTrouble(true, true));
// console.log(monkeyTrouble(false, false));
// console.log(monkeyTrouble(true, false));

// Java > Warm-up1 > parrotTrouble
// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
//We are in trouble if the parrot is talking and the hour is before 7 or after 20.
//Return True if we are in trouble.
solutions.parrotTrouble = function(talking, hour) {
 if (talking === true && (hour < 7 || hour > 20)) {
    return true;
 }
 else {
   return false;
 }
}
// console.log(parrotTrouble(true, 6));
// console.log(parrotTrouble(true, 7));
// console.log(parrotTrouble(false, 6));

// Java > Warm-up1 > posNeg
//Given 2 int values, return True if one is negative and one is positive.
//Except if the parameter "negative" is True, then return True only if
//both are negative.
solutions.posNeg = function(a, b, negative) {
  if (negative === true) {
    return true;
  }
  if ((a < 0 && b > 0) || a > 0 && b < 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(posNeg(1, -1, false));
// console.log(posNeg(-1, 1, false));
// console.log(posNeg(-4, -5, true));

// Java > Warm-up1 > frontBack
// Given a string, return a new string where the first and last chars have been exchanged.
solutions.frontBack = function(str){
	if (str.length <= 1){
		return str;
	}
	mid = str.substring(1, str.length-1);

	return (str.length-1) + mid + str.charAt(0);
}
console.log(solutions.frontBack("code"));
console.log(solutions.frontBack("a"));
console.log(solutions.frontBack("ab"));

// Java > Warm-up1 > or35
// Return true if the given non-negative number is a multiple of 3 or a multiple of 5.
//Use the % "mod" operator
solutions.or35 = function(n){
	if(n % 3 == 0 || n % 5 == 0){
		return true;
	}
	else{
		return false;
	}
}
// console.log(or35(3));
// console.log(or35(10));
// console.log(or35(8));

// Java > Warm-up1 > icyHot
// Given two temperatures, return true if one is less than 0 and the other is greater than 100.
solutions.icyHot = function(temp1, temp2){
	if (temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100){
		return true;
	}
	return false;
}
// console.log(icyHot(120, -1));
// console.log(icyHot(-1, 120));
// console.log(icyHot(2, 120));

// Java > Warm-up1 > loneTeen
// We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// Given 2 int values, return true if one or the other is teen, but not both.
solutions.loneTeen = function(a, b){
	if (a >= 13 || a <= 19){
		return true;
		}
	else{
		return false;
	}
}

// console.log(loneTeen(13, 99));
// console.log(loneTeen(21, 19));
// console.log(loneTeen(13, 13));

// Java > Warm-up1 > startOz
// Given a string, return a string made of the first 2 chars (if present),
// however include first char only if it is 'o' and include the second only if it is 'z',
// so "ozymandias" yields "oz".
solutions.startOz = function(str){
	result = "";

	if(str.length >= 1 && str.charAt(0) == "o"){
		result += str.charAt(0);
	}
	if(str.length >= 2 && str.charAt(1) == "z"){
		result += str.charAt(1);
	}
	return result;
}
// console.log(startOz("ozymandias"));
// console.log(startOz("bzoo"));
// console.log(startOz("oxx"));


// Java > Warmup-1 > intTener
//Given 2 ints, a and b, return True if one of them is 10 or if their sum is 10.
// var intTener = function(a, b) {
//   if (a === 10 || b === 10 || a + b === 10){
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(intTener(9, 10));
// console.log(intTener(9, 9));
// console.log(intTener(1, 9));

// Java > Warmup-1 > in3050
// Given 2 int values, return true if they are both in the range 30..40 inclusive,
// or they are both in the range 40..50 inclusive.
solutions.in3050 = function(a, b) {
	if ((a >= 30 && a<=40 && b>=30 && b<=40) || (a >=40 && a<=50 && b>=40 && b<=50)){
		return true;
	}
	else {
		return false;
		}
}
// console.log(in3050(30, 31));
// console.log(in3050(30, 41));
// console.log(in3050(40, 50));

// Java > Warmup-1 > lastDigit
// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.
solutions.lastDigit = function(a, b){
	return (a % 10 == b % 10);
}
// console.log(lastDigit(7,17));
// console.log(lastDigit(6,17));
// console.log(lastDigit(3,113));

// Java > Warmup-1 > sumDouble
// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
solutions.sumDouble = function(a, b){
	if(a == b){
		return 2*(a+b);
	}
	else {
		return a + b;
	}
}
// console.log(sumDouble(1,2));
// console.log(sumDouble(3,2));
// console.log(sumDouble(2,2));

// Java > Warmup-1 > makes10
// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
solutions.makes10 = function(a,b){
	if((a == 10 || b == 10) || (a + b == 10)){
		return true;
	}
	else{
		return false;
	}
}
// console.log(makes10(9,10));
// console.log(makes10(9,9));
// console.log(makes10(1,9));

// Java > Warmup-1 > notString
// Given a string, return a new string where "not " has been added to the front.
// However, if the string already begins with "not", return the string unchanged.
// Note: use .equals() to compare 2 strings.
solutions.notString = function(str){
	if (str.length <= 3 && str.substring(0,3).localeCompare("not")){
		return str;
	}
	return "not " + str;
}
// console.log(notString("candy"));
// console.log(notString("x"));
// console.log(notString("not bad"));

// Java > Warmup-1 > front3
// Given a string, we'll say that the front is the first 3 chars of the string.
// If the string length is less than 3, the front is whatever is there.
// Return a new string which is 3 copies of the front.
solutions.front3 = function(str){
	front = "";
	if (str.length >= 3){
		front = str.substring(0,3);
	}
	else {
		front = str;
	}
	return front + front + front;
}
// console.log(front3("Java"));
// console.log(front3("Chocolate"));
// console.log(front3("abc"));

// Java > Warmup-1 > front22
// Given a string, take the first 2 chars and return the string with the 2 chars added at both the
// front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever
// chars are there.
solutions.front22 = function(str){
	take = 2;
	if(take > str.length){
		take = str.length;
	}
	front = str.substring(0,take);
	return front + str + front;
}
// console.log(front22("kitten"));
// console.log(front22("Ha"));
// console.log(front22("abc"));

// Java > Warmup-1 > in1020
// Given 2 int values, return true if either of them is in the range 10..20 inclusive.
solutions.in1020 = function(a,b){
	if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)){
		return true;
	}
	else {
		return false;
	}
}
// console.log(in1020(12,99));
// console.log(in1020(21,12));
// console.log(in1020(8,99));

// Java > Warmup-1 > delDel
// Given a string, if the string "del" appears starting at index 1, return a string where that "del"
// has been deleted. Otherwise, return the string unchanged.
// var delDel = function(str){
// 	output = str.substring(1,4);
// 	return output;
	// front = str.substring(0);
	// if(str.substring(1,4).localeCompare("del")){
	// 	output = str.substring(0); //+ str.substring(4,str.length);
	// 	return output;
	// }
	// else {
	// 	return str;
	// }
	// if(str.substring(1,4).localeCompare("del")) {
	// 	output = substring(4);
	// 	return front + output;
	// }
//}
// console.log(delDel("adelbc"));
// console.log(delDel("adelHello"));
// console.log(delDel("adebc"));

// Java > Warmup-1 > intMax
// Given three int values, a b c, return the largest.
solutions.intMax = function(a,b,c){
	max = 0;
	if ( a > b){
		max = a;
	} else {
		max = b;
	}
	if ( c > max ){
		max = c;
	}
	return max;
}
// console.log(intMax(1,2,3));
// console.log(intMax(1,3,2));
// console.log(intMax(3,2,1));

// Java > Warmup-1 > max1020
// Given 2 positive int values, return the larger value that is in the range 10..20
// inclusive, or return 0 if neither is in that range.
solutions.max1020 = function(a,b){
	if (b > a) {
		temp = a;
		a = b;
		b = temp;
	}
	if(a >=10 && a <= 20){
		return a;
	}
	if (a >=10 && a <= 20){
		return b;
	return 0;
	}
}
// console.log(max1020(11,19));
// console.log(max1020(19,11));
// console.log(max1020(11,9));

// Java > Warmup-1 > endUp
// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that
// str.toUpperCase() returns the uppercase version of a string.
solutions.endUp = function(str){
	if(str.length <= 3){
		return str.toUpperCase();
	}
	cut = str.length - 3;
	front = str.substring(0,cut);
	back = str.substring(cut);

	return front + back.toUpperCase();
}
// console.log(endUp("Hello"));
// console.log(endUp("hi there"));
// console.log(endUp("hi"));










// Java > String-1 > helloName
// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
solutions.helloName = function(name){
	return "Hello " + name;
}
// console.log(helloName("bob"));
// console.log(helloName("Alice"));

// Java > String-1 > makeAbba
// Given two strings, a and b, return the result of putting them together in the
// order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
solutions.makeAbba = function(a, b){
	return a + b + b + a;
}
// console.log(solutions.makeAbba("Hi", "Bye"));
// console.log(makeAbba("Yo", "Alice"));
// console.log(makeAbba("What", "Up"));

// Java > String-1 > makeTags
// The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text.
// In this example, the "i" tag makes <i> and </i> which surround the word "Yay".
// Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
solutions.makeTags = function(tag, word){
	return "<"+tag+">"+word+"</"+tag+">";
}
// console.log(solutions.makeTags("i", "Yay"));
// console.log(solutions.makeTags("i", "Hello"));
// console.log(solutions.makeTags("cite", "Yay"));

// Java > String-1 > makeOutWord
// Given an "out" string length 4, such as "<<>>", and a word, return a new string where
// the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j)
// to extract the String starting at index i and going up to but not including index j.
solutions.makeOutWord = function(out, word){
	front = out.substring(0,2);
	back = out.substring(2,4);
	return front + word + back
}
// console.log(solutions.makeOutWord("<<>>", "Yay"));
// console.log(solutions.makeOutWord("<<>>", "WooHoo"));
// console.log(solutions.makeOutWord("[[]]", "word"));

// Java > String-1 > extraEnd
// Given a string, return a new string made of 3 copies of the last 2 chars
// of the original string. The string length will be at least 2.
solutions.extraEnd = function(str){
	if (str.length>1){
		back = str.substring(str.length-2);
		return back+back+back;
	}
}
// console.log(solutions.extraEnd("Hello"));
// console.log(solutions.extraEnd("ab"));
// console.log(solutions.extraEnd("Hi"));

// Java > String-1 > withoutEnd
// Given a string, return a version without the first and last char, so "Hello" yields "ell".
// The string length will be at least 2.
solutions.withoutEnd = function(str){
	return str.substring(1, str.length-1);
}
// console.log(solutions.withoutEnd("Hello"));
// console.log(solutions.withoutEnd("java"));
// console.log(solutions.withoutEnd("coding"));

// Java > String-1 > comboString
// Given 2 strings, a and b, return a string of the form short+long+short, with
// the shorter string on the outside and the longer string on the inside. The
// strings will not be the same length, but they may be empty (length 0).
solutions.comboString = function(a,b){
	if (a.length < b.length){
		return a+b+a;
	}
	else{
		return b+a+b;
	}
}
// console.log(solutions.comboString("Hello", "hi"));
// console.log(solutions.comboString("hi", "Hello"));
// console.log(solutions.comboString("aaa", "b"));

// Java > String-1 > nonStart
// Given 2 strings, return their concatenation, except omit the first char
// of each. The strings will be at least length 1.
solutions.nonStart = function(a,b){
	a = a.substring(1,a.length);
	b = b.substring(1,b.length);
	return a + b;
}
// console.log(solutions.nonStart("Hello", "There"));
// console.log(solutions.nonStart("java", "code"));
// console.log(solutions.nonStart("shotl", "java"));

// Java > String-1 > firstHalf
// Given a string of even length, return the first half.
// So the string "WooHoo" yields "Woo".
solutions.firstHalf = function(str){
	if(str.length % 2 == 0){
		return str.substring(0,str.length/2)
	}
	return str
}
// console.log(firstHalf("WooHoo"));
// console.log(firstHalf("HelloThere"));
// console.log(firstHalf("abcdef"));

// Java > String-1 > firstTwo
// Given a string, return the string made of its first two chars, so the String
// "Hello" yields "He". If the string is shorter than length 2, return whatever
// there is, so "X" yields "X", and the empty string "" yields the
// empty string "". Note that str.length() returns the length of a string.
solutions.firstTwo = function(str){
	if(str.length>2){
		return str.substring(0,2);
	}
	return str;
}
// console.log(solutions.firstTwo("Hello"));
// console.log(solutions.firstTwo("ab"));

// Java > String-1 > left2
// Given a string, return a "rotated left 2" version where the first 2 chars are
// moved to the end. The string length will be at least 2.
solutions.left2 = function(str){
	if(str.length>1){
		front = str.substring(0,2);
		back = str.substring(2,str.length);
		return back + front;
	}
	return str;
}
// console.log(solutions.left2("Hello"));
// console.log(solutions.left2("java"));
// console.log(solutions.left2("Hi"));

// Java > String-1 > right2
// Given a string, return a "rotated right 2" version where the last 2 chars are
// moved to the start. The string length will be at least 2.
solutions.right2 = function(str){
	if(str.length>1){
		back = str.substring(str.length-2,str.length);
		front = str.substring(0,str.length-2);
		return back + front;
	}
	return str;
}
// console.log(solutions.right2("Hello"));
// console.log(solutions.right2("java"));
// console.log(solutions.right2("Hi"));

// Java > String-1 > theEnd
// Given a string, return a string length 1 from its front, unless front is false,
// in which case return a string length 1 from its back. The string will be non-empty.
solutions.theEnd = function(str, front){
	if(front){
		return str.substring(0,1);
	}
	return str.substring(str.length-1);
}

// Java > String-1 > withouEnd2
// Given a string, return a version without both the first and last char of the
// string. The string may be any length, including 0.
solutions.withouEnd2 = function(str){
	if(str.length<=1){
		return "";
	}
	return str.substring(1,str.length-1);
}

// Java > String-1 > middleTwo
// Given a string of even length, return a string made of the middle two chars,
// so the string "string" yields "ri". The string length will be at least 2.
solutions.middleTwo = function(str){
	if(str.length % 2 == 0){
		temp = str.substring(str.length/2 -1);
		mid = temp.substring(0,2);
		return mid;
	}
	return str;
}
// console.log(solutions.middleTwo("string"));
// console.log(solutions.middleTwo("code"));
// console.log(solutions.middleTwo("Practice"));

// Java > String-1 > endsLy
// Given a string, return true if it ends in "ly".
solutions.endsLy = function(str){
	if(str.substring(str.length-2, str.length) == "ly"){
		return true;
	}
	else{
		return false;
	}
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
// solutions.nTwice = function(str, n){
//
// }

// Java > String-1 > twoChar
// Given a string and an index, return a string length 2 starting at the given index.
// If the index is too big or too small to define a string length 2, use the first
// 2 chars. The string length will be at least 2.
// solutions.twoChar = function(str, index){
// 	if(str.length>1){
// 		x = str.substring(index, index+2);
// 		return x;
// 	}
// 	if(index > str.length-2) {
// 		return str.charAt(0) + str.charAt(1);
// 	}
// }
// console.log(solutions.twoChar("java", 0));
// console.log(solutions.twoChar("java", 2));
// console.log(solutions.twoChar("java", 3));

// Java > String-1 > middleThree
// Given a string of odd length, return the string length 3 from its middle, so
// "Candy" yields "and". The string length will be at least 3.
// solutions.middleThree = function(str){
// 	if(str.length <= 3){
// 		return str;
// 	}
// 	if(str.length % 2 != 0){
// 		temp = str.length/2;
// 		mid = str.substring(temp, temp + 2);
// 	}
// }
// console.log(solutions.middleThree("Candy"));
// console.log(solutions.middleThree("and"));
// console.log(solutions.middleThree("solving"));
