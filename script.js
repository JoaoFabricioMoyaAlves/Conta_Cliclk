$(function(){

    let clicks = 0;
    let clicksPorSegundo = 0;
    let intervalo;


  function atualizarContador(){
    $('#cps').text(clicksPorSegundo);
    clicksPorSegundo = 0;
    $('#ct').text(clicks);
  }

  intervalo = setInterval(atualizarContador, 1000);

 $('.castelo').on('click',function(){
    
    clicks++;
    clicksPorSegundo++;
  
    $(this).css({'animation': 'casteloM 0.1s'});
    $('.star').css({ 'display': 'block'});

    $('.star').css({ 'animation': 'starUP 0.1s'});

    $(this).on('animationend', function() {
        $(this).css('animation', 'none'); 
    });
  
        
        $('.star').on('animationend', function() {
            $(this).css('animation', 'none'); 
            $(this).css('display', 'none');});
   

});

$('.reset').on('click', function(){
    clicks = 0;
    clicksPorSegundo = 0;
    
})


});