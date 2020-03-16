// var add = function(number1, number2) {
//   return number1 + number2;
//   };
//   var subtract = function(number1, number2) {
//   return number1 - number2;
//   };
//   var multiply = function(number1, number2) {
//   return number1 * number2;
//   };
//   var divide = function(number1, number2) {
//   return number1 / number2;
//   };
  
//   $(document).ready(function() {
//   $("form#add").submit(function(event) {
//   event.preventDefault();
//   var number1 = parseInt($("#add1").val());
//   var number2 = parseInt($("#add2").val());
//   alert(add(number1, number2));
//   });
//   });



var add = function(number1, number2) {
  return (number1 + number2);
  };
  var subtract = function(number1, number2) {
  return (number1 - number2);
  };
  var multiply = function(number1, number2) {
  return (number1 * number2);
  };
  var divide = function(number1, number2) {
  return (number1 / number2);
  };
  
  $(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = (number1 + number2);
  $("#output").text(result);
  });
  });
 
 




// var add = function(number1, number2) {
//     return number1 + number2;
//   };
//   // addition function
//   var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   var result = add(number1, number2);
//   alert(result);


//   // substraction function
//   var substract = function(number1, number2) {
//     return number1 - number2;
//   };

// var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   var result = substract(number1, number2);
//   alert(result);
// // multiply function

// var multiply = function(number1, number2) {
//     return number1 * number2;
//   };

// var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   var result = multiply(number1, number2);
//   alert(result);

//   //dividing functions
//   var divide = function(number1, number2) {
//     return number1 / number2;
//   };

// var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   var result = (number1/number2);
//   alert(result);



//   var bmi = function(height, weight){
//       return(height,weight);
//   }
//   var height = parseInt(prompt("Enter your height."));
//   var weight = parseInt(prompt("Enter your weight."));
//   var result = (height+weight)/2;
//   alert( "Your bmi is " + result + ".");


// // return an even Number
// var number = parseInt(prompt("Enter your number."))
// function  myFunction(number){
// if(number %2 == 0){
//    return "even";
// }
// else {
//     return "odd";
// }


// }
// alert(myFunction(number))

