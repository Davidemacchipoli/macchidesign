jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;

  $(document).mousemove(function(e){
    mouseX = e.pageX - 20;
    mouseY = e.pageY - 20;
  });

  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);





});


  $('#myworks').hide();

setTimeout(function(){
  $('#primascritta').fadeOut("slow");
  $('#secondascritta').fadeOut("slow");
}, 1000)

setTimeout(function(){
  $('#circle').removeClass("circle");
  $('#circle').addClass("circlepost");
}, 1000)

setTimeout(function(){
  $('#myworks').addClass("showme");
  $('#contacts').addClass("showme");
    $('#about').addClass("showme");
}, 1000)
