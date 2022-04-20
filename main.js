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

  //------------------

  $("#name").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Sausages")
      // $(this).color("#FF7272");
    }).fadeIn(3000);
    $(this).css("color", "#FF7272");
 });
 
  $("#name").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Intraconazole")
    }).fadeIn(2000);
    $(this).css("color", "#FFF");
  });  
  
});


 


