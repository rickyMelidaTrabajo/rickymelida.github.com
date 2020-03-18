$(document).ready(function() {
  var tamaho = screen.width;
  
  if(tamaho < 1250) {
    $('#menu').animate({marginLeft: '-80%'});
    
  }

  var btnMenu= document.querySelector("#icono-menu");

<<<<<<< HEAD
  btnMenu.addEventListener("change", verMenu, false);


  function verMenu(){
      
    //var tamaho = screen.width;

    var seleciona = btnMenu.checked;
    var menu = $('#menu');
    var content = $('#contenedor');

      if(seleciona){
        $('header').animate({marginLeft: '80%'});
        menu.animate({marginLeft: '0px'});
        content.addClass('mover-content');
      }else {
        content.removeClass('mover-content');
        $('header').animate({marginLeft: '0%'});
        menu.animate({marginLeft: '-80%'});
        //menú.style.display = 'inherit';
      }  
    

=======
function verMenu(){
    
  var seleciona = btnMenu.checked;
  var menu = $('#menu');
  var content = $('#contenedor');
  
  if(seleciona){
    $('header').animate({marginLeft: '80%'});
    menu.animate({marginLeft: '0px'});
    content.addClass('mover-content');
  }else {
>>>>>>> 6527723b33cd4bfe2dce9c88da6f95f60b567cd9
    
  }


});


