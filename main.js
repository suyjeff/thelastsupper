$(document).ready(function() {

  $('#menu-label').click(function() {
    if($(this).css("margin-right") == "240px")
    {
        $('#menu').animate({"margin-right": '-=240'});
    }
    else
    {
        $('#menu').animate({"margin-right": '+=240'});
    }
  });

  $('#close').click(function() {
    $('#menu').animate({"margin-right": '-=240'});
  });

  $("#about").on('click', function(){
    window.location = "about.html";    
  });

  // $("#beef").hover(function() {
  //   if (!$(this).hasClass("animated")) {
  //     $(this).dequeue().stop().animate({ color: "#CE0000", content: "beef" });
  //   }   
  // }, function() {
  //   $(this).addClass("animated").animate({ color: "#ffffff", content: "Amiodarone" }, "normal", "linear", function() {
  //     $(this).removeClass("animated").dequeue();
  //   });
  // });

  // $("#beef").hover(function() {
  //   $(this).animate({ color: "#CE0000"});
  // }, function() {
  //   $(this).animate({ color: "#ffffff"});
  // });
  
});
  

 


