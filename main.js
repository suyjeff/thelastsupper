var pairs = [ 
  {"food":"Cornedbeef", "color": "#CE0000", "med":"Amiodarone"}, 
  {"food":"Sausages", "color": "#FF7272", "med":"Intraconazole"},
  {"food":"Chicken", "color": "#FF7438", "med":"Morphine"},
  {"food":"Meatballs", "color": "#A8392A", "med":"Moclobemide"},
  {"food":"Liver", "color": "#6B5CCB", "med":"Antimuscarinic"},
  {"food":"Steak & Kidney", "color": "#E0E400", "med":"Ethambutol"},
  {"food":"Sandwich", "color": "#00A424", "med":"Saquinavir"},
  {"food":"Dumplings", "color": "#E61BEA", "med":"Lisinopril"},
  {"food":"Cornish Pasty", "color": "#99D4FF", "med":"Rifampicin"},
  {"food":"Omelette", "color": "#CEA100", "med":"Ondansetron"},
  {"food":"Salad", "color": "#8DB716", "med":"Lamivudine"},
  {"food":"Mushroom", "color": "#24B0FF", "med":"Pyrimethamine"},
  {"food":"Beans & Chips", "color": "#A65532", "med":"Chips"},
];

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

  $('#title').click(function() {
    window.location = 'index.html';
  });

  $('#title').mouseenter(function() {
    $("#supper").css("display", "block");
  });

  $('#title').mouseleave(function() {
    $("#supper").css("display", "none");
  });

  $('#close').click(function() {
    $('#menu').animate({"margin-right": '-=240'});
  });

  $('#cabinet').click(function() {
    window.location = 'index.html';
  });

  $("#about").on('click', function(){
    window.location = "about.html";    
  });

  $(".back").on('click', function(){
    window.location = "index.html";
  });

  $(".pieces").mouseenter(function() {
    $(this).children(".art-shade").css("display", "block");
  });

  $(".pieces").mouseleave(function() {
    $(this).children(".art-shade").css("display", "none");
  });

  $(".art-close").click(function() {
    $(this).parent().parent().hide();
  });



  //------------------

  $("#amiodarone").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Cornedbeef");
    }).fadeIn(1000);
    $(this).css("color", "#CE0000");
  });
  
  $("#amiodarone").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Amiodarone");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  });

  $("#intraconazole").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Sausages");
    }).fadeIn(1000);
    $(this).css("color", "#CE0000");
  });
  
  $("#intraconazole").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Intraconazole");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  }); 

  $("#morphine").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Chicken");
    }).fadeIn(1000);
    $(this).css("color", "#FF7438");
  });
  
  $("#morphine").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Morphine");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  });

  $("#moclobemide").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Meatballs");
    }).fadeIn(1000);
    $(this).css("color", "#A8392A");
  });
  
  $("#moclobemide").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Moclobemide");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  }); 

  $("#anti").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Liver");
    }).fadeIn(1000);
    $(this).css("color", "#6B5CC8");
  });
  
  $("#anti").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Antimuscarinic");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  }); 

  $("#etham").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Steak & Kidney");
    }).fadeIn(1000);
    $(this).css("color", "#E0E400");
  });
  
  $("#etham").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Ethambutol");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  });
  
  $("#saq").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Sandwich");
    }).fadeIn(1000);
    $(this).css("color", "#00A424");
  });
  
  $("#saq").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Saquinavar");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  }); 

  $("#lisino").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Dumplings");
    }).fadeIn(1000);
    $(this).css("color", "#E61BEA");
  });
  
  $("#lisino").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Lisinopril");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  }); 

  $("#rifampicin").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Pasty");
    }).fadeIn(1000);
    $(this).css("color", "#99D4FF");
  });
  
  $("#rifampicin").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Rifampicin");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  });
  
  $("#ondan").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Omelette");
    }).fadeIn(1000);
    $(this).css("color", "#CEA100");
  });
  
  $("#ondan").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Ondansetron");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  });

  $("#lami").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Salad");
    }).fadeIn(1000);
    $(this).css("color", "#8DB716");
  });
  
  $("#lami").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Lamivudine");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  }); 

  $("#pyri").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Mushroom");
    }).fadeIn(1000);
    $("#mushroom").css("color", "#24B0ff");
  });
  
  $("#pyri").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Pyrimethamine");
    }).fadeIn(500);
    $("#mushroom").css("color", "#FFF");
  }); 

  $("#chips").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Beans & Chips");
    }).fadeIn(1000);
    $(this).css("color", "#A65532");
  });
  
  $("#chips").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Chips");
    }).fadeIn(500);
    $(this).css("color", "#FFF");
  }); 

  // ------------------------

  //Display image on click
  $("#mushroom").on('click', function(){
    $(this).css("color", "#24B0ff");
    $("#mushroom-img").css({
      "display":"block",
      "left":"800px",
      "z-index":"2"
    });
  });

  $("#beef").on('click', function(){
    $("#beef-img").css({
      "display":"block",
      "left":"800px",
      "z-index":"2"
    });
  });

  $("#chicken").on('click', function(){
    $("#chicken-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
  });

  $("#meatballs").on('click', function(){
    $("#meatball-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
  });

  $("#liver").on('click', function(){
    $("#liver-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
  });

  $("#steak").on('click', function(){
    $("#steak-img").css({
      "display":"block",
      "left":"800px",
      "top":"300px",
      "z-index":"2"
    });
  });

  $("#sandwich").on('click', function(){
    $("#sandwich-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
  });

  $("#dumpling").on('click', function(){
    $("#dumpling-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
  });

  $("#omelette").on('click', function(){
    $("#omelette-img").css({
      "display":"block",
      "left":"600px",
      "top":"150px",
      "z-index":"2"
    });
  });

  $("#salad").on('click', function(){
    $("#salad-img").css({
      "display":"block",
      "left":"900px",
      "top":"100px",
      "z-index":"2"
    });
  });

  $("#cornish").on('click', function(){
    $("#salad-img").css({
      "display":"block",
      "left":"600px",
      "top":"100px",
      "z-index":"2"
    });
  });

  $("#beans").on('click', function(){
    $("#beans-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
  });

  $("#sausage").on('click', function(){
    $("#sausage-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
  });
  

  
});


 


