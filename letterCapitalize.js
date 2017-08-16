
//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

//Use the Parameter Testing feature in the box below to test your code with different arguments.



function LetterCapitalize(str) { 

var myString = str.split(" ");

 var finalString = [];

 for (var x=0; x < myString.length; x++) {
 	
 	finalString.push(myString[x].charAt(0).toUpperCase() + myString[x].slice(1)); 

 	
 }
return finalString.join(" ");
         
}
   
// keep this function call here 
LetterCapitalize(readline());
