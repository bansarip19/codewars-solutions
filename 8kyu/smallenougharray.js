/* 
*** No Loops Allowed ***

You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.
*/
function smallEnough(a, limit){
const arrayless = a.every(el => el <= limit);
  return arrayless;
}
