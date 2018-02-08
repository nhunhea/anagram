function anagram (s1, s2) {
    temps1 = s1.replace(/[^a-z0-9]/ig,'').toLowerCase().split("").sort().join("");
    temps2 = s2.replace(/[^a-z0-9]/ig,'').toLowerCase().split("").sort().join("");
    
  if(temps1 && temps2 && temps1.length === temps2.length){
   return true;
  }
  else return false;
}
console.log(anagram("ye.s","sey"));
