var age = prompt("Hello enter your age");
var name = prompt("Enter your name");
var food = prompt("Enter your favourite dish");
function myFunction (name,age,food){
alert("Your name is " + name + " and your age is " + age + " and your favourite dish is " + food +".")
}
myFunction(name,age,food)
/// or

var age = prompt("Hello enter your age");
var name = prompt("Enter your name");
var food = prompt("Enter your favourite dish");
function myFunction (name,age,food){
return("Your name is " + name + " and your age is " + age + " and your favourite dish is " + food +".")
}
alert(myFunction(name,age,food))


var name = prompt("Hello enter your name");
 function myFunction (name){
  alert(" Goodmorning ...Your name is " + name + ".");

 } 
 myFunction(name);

// or it can be written as


 var name = prompt("Hello enter your name");
 function myFunction (name){
     return("Your name is " + name + ".");

 }
 alert("Goodmorming " + name + ".")


 var num1 = parseInt(prompt("Enter the  first number"));
 var num2= prompt("Enter the second number");
 function myFunction(num1,num2){
    return(num1 - num2);}
  
  alert(myFunction(num1,num2))





var add = function(number1, number2) {
    return number1 + number2;
  };
  
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = add(number1, number2);
  alert(result);

// or it can be wriitten
// having two functions with the same prompts
var num1 = parseInt(prompt("Enter the  first number"));
var num2= parseInt(prompt("Enter the second number"));
var num3 = parseInt(prompt("Enter the  third number"));

function myFunction(num1,num2){
   result= num1 + num2;
   alert(result)
  }
 
 myFunction(num1,num2)

 function threeTimes(num1,num2,num3){
  result2= num1 * num2*num3;
  alert(result2)
 }

threeTimes(num1,num2,num3)


// two function for dividing and getting modulus
var num1 = parseInt(prompt("Enter the  first number"));
var num2= parseInt(prompt("Enter the second number"));


function myFunction(num1,num2){
   result= num1/num2;
   alert(result)
  }
 
 myFunction(num1,num2)

 function threeTimes(num1,num2){
  result2= num1 % num2;
  alert(result2)
 }

threeTimes(num1,num2)

