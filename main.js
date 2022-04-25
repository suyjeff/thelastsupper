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
    $("#clear").css("color", "black");
  });

  $("#clear").click(function() {
    $(".pieces").hide();
    $("#clear").css("color", "black");
  });

  //------------------

  $("#amiodarone").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Cornedbeef");
    }).fadeIn(1000);
    $("#beef").css("color", "#CE0000");
  });
  
  $("#amiodarone").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Amiodarone");
    }).fadeIn(500);
    $("#beef").css("color", "#FFF");
  });

  $("#intraconazole").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Sausages");
    }).fadeIn(1000);
    $("#sausage").css("color", "#FF7272");
  });
  
  $("#intraconazole").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Intraconazole");
    }).fadeIn(500);
    $("#sausage").css("color", "#FFF");
  }); 

  $("#morphine").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Chicken");
    }).fadeIn(1000);
    $("#chicken").css("color", "#FF7438");
  });
  
  $("#morphine").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Morphine");
    }).fadeIn(500);
    $("#chicken").css("color", "#FFF");
  });

  $("#moclobemide").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Meatballs");
    }).fadeIn(1000);
    $("#meatballs").css("color", "#A8392A");
  });
  
  $("#moclobemide").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Moclobemide");
    }).fadeIn(500);
    $("#meatballs").css("color", "#FFF");
  }); 

  $("#anti").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Liver");
    }).fadeIn(1000);
    $("#liver").css("color", "#6B5CC8");
  });
  
  $("#anti").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Antimuscarinic");
    }).fadeIn(500);
    $("#liver").css("color", "#FFF");
  }); 

  $("#etham").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Steak & Kidney");
    }).fadeIn(1000);
    $("#steak").css("color", "#E0E400");
  });
  
  $("#etham").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Ethambutol");
    }).fadeIn(500);
    $("#steak").css("color", "#FFF");
  });
  
  $("#saq").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Sandwich");
    }).fadeIn(1000);
    $("#sandwich").css("color", "#00A424");
  });
  
  $("#saq").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Saquinavar");
    }).fadeIn(500);
    $("#sandwich").css("color", "#FFF");
  }); 

  $("#lisino").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Dumplings");
    }).fadeIn(1000);
    $("#dumpling").css("color", "#E61BEA");
  });
  
  $("#lisino").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Lisinopril");
    }).fadeIn(500);
    $("#dumpling").css("color", "#FFF");
  }); 

  $("#rifampicin").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Pasty");
    }).fadeIn(1000);
    $("#cornish").css("color", "#99D4FF");
  });
  
  $("#rifampicin").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Rifampicin");
    }).fadeIn(500);
    $("#cornish").css("color", "#FFF");
  });
  
  $("#ondan").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Omelette");
    }).fadeIn(1000);
    $("#omelette").css("color", "#CEA100");
  });
  
  $("#ondan").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Ondansetron");
    }).fadeIn(500);
    $("#omelette").css("color", "#FFF");
  });

  $("#lami").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Salad");
    }).fadeIn(1000);
    $("#salad").css("color", "#8DB716");
  });
  
  $("#lami").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Lamivudine");
    }).fadeIn(500);
    $("#salad").css("color", "#FFF");
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
    $("#chips").css("color", "#A65532");
  });
  
  $("#chips").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Chips");
    }).fadeIn(500);
    $("#chips").css("color", "#FFF");
  });

  $("#about").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Hirst");
    }).fadeIn(100);
  });

  $("#about").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("About");
    }).fadeIn(500);
  });

  $("#cabinet").mouseover(function() {
    $(this).fadeOut(function() {
      $(this).text("Pantry");
    }).fadeIn(100);
  });

  $("#cabinet").mouseout(function() {
    $(this).fadeOut(function() {
      $(this).text("Cabinet");
    }).fadeIn(500);
  });

  // ------------------------

  $("#mushroom").on('click', function(){
    $(this).css("color", "#24B0ff");
    $("#mushroom-img").css({
      "display":"block",
      "left":"800px",
      "z-index":"2"
    });
    $("#pyri").css("color", "#24B0FF");
    $("#clear").css("color", "#FFF");
  });

  $("#beef").on('click', function(){
    $("#beef-img").css({
      "display":"block",
      "left":"800px",
      "z-index":"2"
    });
    $("#amiodarone").css("color", "#CE0000");
    $("#clear").css("color", "#FFF");
  });

  $("#chicken").on('click', function(){
    $("#chicken-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
    $("#morphine").css("color", "#FF7438");
    $("#clear").css("color", "#FFF");
  });

  $("#meatballs").on('click', function(){
    $("#meatball-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
    $("#moclobemide").css("color", "#A8392A");
    $("#clear").css("color", "#FFF");
  });

  $("#liver").on('click', function(){
    $("#liver-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
    $("#anti").css("color", "#6B5CC8");
    $("#clear").css("color", "#FFF");
  });

  $("#steak").on('click', function(){
    $("#steak-img").css({
      "display":"block",
      "left":"800px",
      "top":"300px",
      "z-index":"2"
    });
    $("#etham").css("color", "#E0E400");
    $("#clear").css("color", "#FFF");
  });

  $("#sandwich").on('click', function(){
    $("#sandwich-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
    $("#saq").css("color", "#00A424");
    $("#clear").css("color", "#FFF");
  });

  $("#dumpling").on('click', function(){
    $("#dumpling-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
    $("#lisino").css("color", "#E61BEA");
    $("#clear").css("color", "#FFF");
  });

  $("#omelette").on('click', function(){
    $("#omelette-img").css({
      "display":"block",
      "left":"600px",
      "top":"150px",
      "z-index":"2"
    });
    $("#ondan").css("color", "#CEA100");
    $("#clear").css("color", "#FFF");
  });

  $("#salad").on('click', function(){
    $("#salad-img").css({
      "display":"block",
      "left":"900px",
      "top":"100px",
      "z-index":"2"
    });
    $("#lami").css("color", "#8DB716");
    $("#clear").css("color", "#FFF");
  });

  $("#cornish").on('click', function(){
    $("#cornish-img").css({
      "display":"block",
      "left":"600px",
      "top":"100px",
      "z-index":"2"
    });
    $("#rifampicin").css("color", "#99D4FF");
    $("#clear").css("color", "#FFF");
  });

  $("#beans").on('click', function(){
    $("#beans-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
    $("#chips").css("color", "#A65532");
    $("#clear").css("color", "#FFF");
  });

  $("#sausage").on('click', function(){
    $("#sausage-img").css({
      "display":"block",
      "left":"200px",
      "top":"200px",
      "z-index":"2"
    });
    $("#intraconazole").css("color", "#FF7272");
    $("#clear").css("color", "#FFF");
  });

});

// Assign draggable to all pieces
for (var i = 0; i < document.getElementsByClassName("pieces").length; i++) {
  dragElement(document.getElementsByClassName("pieces")[i]);
};

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  elmnt.onmousedown = dragMouseDown;
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




 


