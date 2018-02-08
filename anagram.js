function anagram (s1, s2) {
  var temps1,temps2;
    temps1 = s1.replace(/[^a-z0-9]/ig,'').toLowerCase().split("").sort().join("");
    temps2 = s2.replace(/[^a-z0-9]/ig,'').toLowerCase().split("").sort().join("");
  if (s1.match(/[0-9]/) || s2.match(/[0-9]/)){
    throw new Error('Invalid Input. Only string allowed.');
  }
  else {
    if(temps1 && temps2 && temps1.length === temps2.length){
      return true;
    }
    else return false;
  }
}
//console.log(anagram("yes","sey"));
//console.log(anagram("ye s","sey"));
//console.log(anagram("yes","no"));
console.log(anagram("yes9","sey"));
