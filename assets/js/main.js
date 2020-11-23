$("#InputEmail1").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Enter Email');
}, function() {
    $(this).css('cursor','auto');
});

$("#InputPassword1").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Enter Password');
}, function() {
    $(this).css('cursor','auto');
});

$("#InputEmail1,#InputPassword1").focus(function(){
    $(this).css("background-color","#939090");
});

$("#InputEmail1,#InputPassword1").blur(function(){
    $(this).css("background-color","#f2f2f2");
});

$(document).ready(function(){
   $("#div-toggle").hide();
});


$(document).ready(function(){
    $("#social-toggle").click(function(){
      $("#div-toggle").toggle();
    });
  });

$(document).ready(function(){
    $("#social-toggle").hover(function(){
        $(this).css('color','#939090');
        $(this).css('cursor','pointer');
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });

    $("#flip").hover(function(){
        $(this).css('cursor','pointer');
    });
  });

