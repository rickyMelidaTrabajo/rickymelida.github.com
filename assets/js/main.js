$(document).ready(function() {

  var btnMenu= document.querySelector("#icono-menu");
  
  btnMenu.addEventListener("change", verMenu, false);
  
  var tamaho = screen.width;
  var titulo = document.title;
  var selec = $('#selec-item');
  var index = $('ul li:nth-child(1)');

  switch(titulo) {
    
    case 'Ricardo M.':
      $('ul li:nth-child(1)').attr('id', 'selec-item');
      break;
      
    case 'Habilidades':
      $('ul li:nth-child(4)').attr('id', 'selec-item');
      break;
        
    case 'Sobre Mi':
      $('ul li:nth-child(2)').attr('id', 'selec-item');
      break;
          
    case 'Portafolio':
      $('ul li:nth-child(3)').attr('id', 'selec-item');
      break;
            
    case 'Contacto':
        $('ul li:nth-child(5)').attr('id', 'selec-item');
        break;

  }

  a.attr('id', 'selec-item');
  
  if(tamaho < 1250) {
    $('#menu').animate({marginLeft: '-80%'});
    
  }




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
    

    
  }


});


