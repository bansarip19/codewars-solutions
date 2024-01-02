function sameCase(a, b){
 
  if (
    (a.match(/[a-z]/) && b.match(/[a-z]/)) ||
    (a.match(/[A-Z]/) && b.match(/[A-Z]/))
  ) {
    return 1;
  }
  if (
    (b.match(/[a-z]/) && a.match(/[A-Z]/)) ||
    (b.match(/[A-Z]/) && a.match(/[a-z]/))  
  ) {
    return 0;
  }
  return -1;
}
   
