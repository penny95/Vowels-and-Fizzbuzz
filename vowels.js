var vowels =["a","e","i","o","u"];
let count;

var newArray="";
function countVowels(str){
  for(var x=0; x<str.length; x++){
    if(str.indexOf(vowels[x])!==-1){
      newArray+=vowels[x];
    }
      else{
        count= str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length;
      }
    }
    return [newArray, count];
  }  
console.log(countVowels("World of Programming"));
