/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59

*/
function past(h, m, s){
  //#Happy Coding! ^_^
  let SEC_IN_MIN = 60;
let SEC_IN_HOUR = SEC_IN_MIN * 60;
let secFromMidnight = h * SEC_IN_HOUR + m * SEC_IN_MIN + s;
  return secFromMidnight*1000
}
