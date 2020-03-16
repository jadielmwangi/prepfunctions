var number = parseInt(prompt("Enter your number."))
function  myFunction(number){
if(number %2 == 0){
   return("The number is even");
}
else {
    return("The number is odd");
}
}
alert(myFunction(number))


//FAILED TO RUN
var food = parseInt((prompt("What food would you like to be served?")))

function  myFunction(food){
if(food  == "burger"){
   return("Here is some burger for you. Anything else?");
} 
else {
    return("Thanks you for choosing us");
}
}
alert(myFunction(food))

//GRADE SCORE RUN
var mark = parseInt((prompt("Enter marks")))

function  myFunction(mark){
if(mark >= 80 && mark <= 100){
   return("Grade score is A");
} 
else if(mark >= 60 && mark <= 79){
    return("Grade score is B");
}
else if(mark >= 40 && mark <= 59){
    return("Grade score is C");
}
else if(mark >= 20 && mark <= 39){
    return("Grade score is D");
}
else if(mark >= 20 && mark <= 0){
    return("Grade score is E");
}
else {
    return("Invalid entry");
}
}
alert(myFunction(mark))


// has a problem in executing

var temperature = parseInt(prompt("Enter temp value."));
var raining =  parseInt(prompt("isn't raining, true or false?"));
if (temperature < 0) {
  alert("Brr! Don't freeze out there!");
} 
else if (temperature < 15 &&!  raining) {
    alert("Don't forget a jacket!");
  }
else if (temperature < 25) {
 alert("Have a nice day:");
} else {
 alert("Keep cool today!");
}