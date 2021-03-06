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

  $('#myCarousel').hide();
  $('#cont3').hide();
  $('#linkedin').hide();
    $('#frecciaindietro').hide();
      $('#email').hide();
          $('#getintouch').hide();


  $('#contacts').click(function(e) {
          $('#cont3').fadeIn(1000);
          $('#frecciaindietro').fadeIn(1000);
          $('#email').fadeIn(1000);
          $('#linkedin').fadeIn(1000);
          $('#getintouch').fadeIn(1000);
      });

      $('#frecciaindietro').click(function(e) {
        $('#cont3').fadeOut(1000);
        $('#linkedin').fadeOut(1000);
          $('#frecciaindietro').fadeOut(1000);
            $('#email').fadeOut(1000);
                $('#getintouch').fadeOut(1000);
          });
});


  $('#myworks').hide();


setTimeout(function(){
  $('#primascritta').fadeOut("slow");
  $('#secondascritta').fadeOut("slow");
}, 15000)

setTimeout(function(){
  $('#circle').removeClass("circle");
  $('#circle').addClass("circlepost");
}, 8000)

setTimeout(function(){
  $('#myworks').addClass("showme");
  $('#myCarousel').fadeIn(8000);
  $('#contacts').addClass("showme");
    $('#about').addClass("showme");
}, 15000)
