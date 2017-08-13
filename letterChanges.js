
//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

//Use the Parameter Testing feature in the box below to test your code with different arguments.



function LetterChanges(str) { 

     var characters = str.split("");
     var newWord = []; 

      for (var x = 0; x < characters.length; x++) {  
       
  
            var res = String.fromCharCode(characters[x].charCodeAt() + 1);
            
            var pattern = /^[a-zA-Z]+$$/; 
            
            if (!pattern.test(res)) {
                res = String.fromCharCode(characters[x].charCodeAt() - 0);
                
            }
            
            else if (res === "a" || res === "e" || res === "i" || res === "o" || res === "u") {//check if vowel
        	    res = res.toUpperCase();
        	}
            	
        	
        newWord.push(res);
  } 

    
  return newWord.join(""); 
