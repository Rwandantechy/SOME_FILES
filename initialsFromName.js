/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

let createInitialsFromName = (name) => {
//create an array from a name 
    let NameArray =name.split(" ");

   //accessing the length of the name 
   let Namelength = NameArray.length;
   //if it is a single word
     if (Namelength == 1) 
     { 
       let FirstChar =name.charAt(0).toUpperCase();
       let SecondChar = name.charAt(1).toUpperCase();
         return FirstChar +SecondChar ; 
       }
       //for two words 
       else if(Namelength==2)     
      {
        let FirstChar = NameArray[0].charAt(0).toUpperCase();
         let SecondChar = NameArray[1].charAt(0).toUpperCase();
          return FirstChar + SecondChar;
        } 
        // more than two words
      else {
        let FirstChar= NameArray[0].charAt(0).toUpperCase(); 
        let lastChar = NameArray[Namelength- 1].charAt(0).toUpperCase();
        return FirstChar+lastChar;
       } 
   };

module.exports = createInitialsFromName;
