// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ""

// variable for all possible characters

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var lowercase = "abcdefghijklmnopqrstuvwxyz";
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers= "0123456789";
      var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

      function generatePassword(){
      
       var passwordChar= "";  
       var password=""; 

 var passlength = parseInt(prompt('how long do you want your password'));
 console.log(passlength);
 if(passlength < 8){
alert("password must be 8 characters")
 }
 
 if(passlength > 128){
  alert("password must be no more than 128 characters")
   }




 var wantUpper=confirm('do you want Uppercase letters');
 if(wantUpper) { 
 passwordChar+= uppercase

 }
 

 var wantLowercase=confirm('do you want Lowercase characters');
 if(wantLowercase) {
  passwordChar+= lowercase
 }

 var wantpuncation=confirm('do you want Special Characters letters');
 if(wantpuncation){
  passwordChar+= punctuation }


 var wantnumbers=confirm('do you want Numbers letters');
 if(wantnumbers){
  passwordChar+= numbers
 }

 console.log(passwordChar)
 for (var i = 0; i < passlength; i++) {
  password+= passwordChar.charAt(Math.floor(Math.random()*passwordChar.length))


  // for loop that adds a random character from the possible characters to the final password variable each iteration of this loop
  // use Math.floor(Math.random()) to get that character
  // var someVar = "1234567890" return someVar.charAt()
 }
  return password // eventually return the actual password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
