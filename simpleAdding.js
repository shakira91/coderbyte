//Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 

//Use the Parameter Testing feature in the box below to test your code with different arguments.


function SimpleAdding(num) { 

var sum = 0; 

for (var y = 0; y <= num; y++) {
    sum = sum + y; 
}
  // code goes here  
  return sum; 
         
}
   
// keep this function call here 
SimpleAdding(readline());
