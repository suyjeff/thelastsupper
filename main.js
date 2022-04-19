$(document).ready(function()
{
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

 });  


