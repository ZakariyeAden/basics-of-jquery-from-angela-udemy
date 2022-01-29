// $("h1").css("color", "red"); 

// $("h1").css("color", "green"); // documentqueryselector
// $("button");

// $("h1").addClass("big-title margin-50")
// $("h1").addClass("big-title"); // adds class


// $("button").text("Don't click me"); //changing text

// $("button").html("<em>hey</em>"); //intrepret html

// console.log$("img").attr("src");

// $("a").attr("href", "https://www.yahoo.com") //takes you to yahoo instead of google

// $("h1").click(function(){
//   $("h1").css("color", "purple");
// });

// ******* normal way on javascript to click button to change color of h1 *******//
// for(var i = 0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// ********* jquery way (shorter way) *********//

// $("button").click(function(){
//   $("h1").css("color", "purple");
// });


// // *****input for jquery
// $("input").keypress(function (event){
//   $("h1").text(event.key);
// });


// //*****adding evenetlistener
$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
});

// //*****adding elements
// $("h1").before("<button>New</button>");

// $("h1").prepend("<button>New</button>"); //preprend adds inside before the hello of h1

// $("h1").append("<button>New</button>");  //preprend adds inside after the hello of h1

// $("button").remove();   //removes all the buttons



//******website animation
// $("button").on("click", function(){
//   $("h1").hide();
// });

// $("button").on("click", function(){
//   $("h1").fadeToggle();
// });

// $("button").on("click", function(){
//   $("h1").slideUp();
// });

// $("button").on("click", function(){
//   $("h1").slideDown();
// });

// $("button").on("click", function(){
//   $("h1").slideToggle();
// });

// $("button").on("click", function(){
//   $("h1").animate({opacity:0.5});
// });


$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});