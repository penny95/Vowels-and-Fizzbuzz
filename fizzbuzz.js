function fizzBuzz(list1, list2) {
var sumOfArrayLengths=list1.length + list2.length;
    
    if(sumOfArrayLengths%3 == 0 && sumOfArrayLengths%5!== 0 ){
        return "fizz";
    }
    else if(sumOfArrayLengths%5 == 0 && sumOfArrayLengths%3!== 0){
        return "Buzz";
    }
    else if(sumOfArrayLengths %3 == 0 && sumOfArrayLengths%5== 0 ){
        return "fizzBuzz" ;
    }
    else if(sumOfArrayLengths%3!== 0 && sumOfArrayLengths%5 !== 0){
        return sumOfArrayLengths ;
    }
}
console.log(fizzBuzz([1, 2, 3,4,5,6,7,8], [1, 2, 3,4,5,6,7]));
module.exports = fizzBuzz;