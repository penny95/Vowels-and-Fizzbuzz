var vowels =["a","e","i","o","u"];

var newArray="";
function countVowels(str){

    var vcount=0;
    for(var x=0; x<str.length; x++)
    {
      if(str.indexOf(vowels[x])!==-1)
      {
        newArray+=vowels[x];
        vcount++;

      }

    }
        return [newArray, vcount];
}  
console.log(countVowels("World of Programming"));
