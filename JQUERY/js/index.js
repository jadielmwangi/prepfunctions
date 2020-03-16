$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#story").show();

    event.preventDefault();
  });
});




        // var Food = $("input:radio[name=flavor]:checked").val();

        // var dob = $("#born").val();

       
        // var favoriteColor = $("#color").val();






//  $("ul#user").children("li").first().click(function() {
//     $(this).remove();
//   });
//   $("ul#webpage").children("li").first().click(function() {
//     $(this).remove();
//   });


//  $("button#hello").click(function() {
//     $("ul#user").prepend("<Hello!>");
//     $("ul#webpage").prepend("<Why hello there!>");
//     $('li').click(function() {
//       alert('hi');
//     });
//   });
//   $("button#hello").click(function() {
//     $("ul#user").prepend("<Goodbye>");
//     $("ul#webpage").prepend("<Goodbye, dear user>");
//     $('li').click(function() {
//       alert('hi');
//     });
//   });

//   $("button#hello").click(function() {
//     $("ul#user").prepend("<Stop copying me.>");
//     $("ul#webpage").prepend("<Pardon me. I meant no offense!>");
//     $('li').click(function() {
//       alert('hi');
//     });
//   });



// $(document).ready(function() {
//     $("button#hello").click(function() {
//       $("ul#user").prepend("<li>Hello!</li>");
//       $("ul#webpage").prepend("<li>Why hello there!</li>");
//       $('li').click(function() {
//         alert('hi');
//       });
//     });

//     $("button#goodbye").click(function() {
//       $("ul#user").prepend("<li>Goodbye!</li>");
//       $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
//     });

//     $("button#stop").click(function() {
//       $("ul#user").prepend("<li>Stop copying me!</li>");
//       $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//     });
//   });


// $(document).ready(function() {
//     $("button#hello").click(function() {
//       $("ul").prepend("<li>Hello!</li>");
//     });

//     $("button#goodbye").click(function() {
//       $("ul").prepend("<li>Goodbye!</li>");
//     });

//     $("button#stop").click(function() {
//       $("ul").prepend("<li>Stop copying me!</li>");
//     });
//   });



// $(document).ready(function() {
//     $("h1").click(function() {
//       alert("This is a header.");
//     });
  
//     $("p").click(function() {
//       alert("This is a paragraph? yes or no?");
//     });
  
//     $("img").click(function() {
//       alert("This is an image.");
//     });
//   });


// $(document).ready(function() {
//     $(".clickable").click(function() {
//       $("#walrus-showing").toggle();
//       $("#walrus-hidden").toggle();
//     });
//   });


// $(document).ready(function() {
//     $("button#green").click(function() {
//         $("body").removeClass();
//         $("body").addClass("green-background");
        
//       });

//     $("button#yellow").click(function() {
//       $("body").removeClass();
//       $("body").addClass("yellow-background");
//     });

//     $("button#red").click(function() {
//       $("body").removeClass();
//       $("body").addClass("red-background");
//     });
//   });

