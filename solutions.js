// Java > Warmup-1 > in3050 
// Given 2 int values, return true if they are both in the range 30..40 inclusive, 
// or they are both in the range 40..50 inclusive. 
var in3050 = function(a, b) {
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

