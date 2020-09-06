$(document).ready(function () {


  // Boton para ver menu en tamanho movil y tablet
  var btnMenu = document.querySelector("#icono-menu");

  //addEventListener que esta a la escucha de un cambio en boton
  //de mostrar el menu en tamanho movil y tablet
  btnMenu.addEventListener("change", verMenu, false);

  //Aqui vemos el tamanho actual de la pantalla
  var tamaho = screen.width;

  //Aqui vemos el titulo del documento actual
  var titulo = document.title;

  switch (titulo) {
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
      $('ul li:nth-child(2)').attr('id', 'selec-item');
      break;

    case 'Contacto':
      $('ul li:nth-child(5)').attr('id', 'selec-item');
      break;

  }

  if (tamaho < 1250) {
    $('#menu').animate({ marginLeft: '-80%' });

  }

  function verMenu() {

    var seleciona = btnMenu.checked;
    var menu = $('#menu');
    var content = $('#contenedor');
    var header = $('header');
    var headerHab = document.querySelector('header');


    if (seleciona) {
      header.animate({ marginLeft: '80%' });
      menu.animate({ marginLeft: '0px' });
      content.addClass('mover-content');
      headerHab.removeAttribute('id');

      if(titulo == 'Portafolio') {
        $('header').css('background', '#008B8B');
      }

    } else {
      header.animate({ marginLeft: '0%' });
      menu.animate({ marginLeft: '-80%' });
      content.removeClass('mover-content');
      headerHab.setAttribute('id', 'header-habilidades');

      if(titulo == 'Portafolio') {
        $('header').css('background', '#f0ffffcc');
      }

    }

  }

  //Se selecciona proyecto que se encuentra en el PORTAFOLIO
  //esto con el fin que se pueda duplicar
  let projects = document.querySelector('.projects');

  //Contenedor de los projectos del PORTAFOLIO
  let contenedor = document.querySelector('#contenedor');

  
  // Aqui duplicamos los proyectos, le agregamos un id diferente
  // a cada uno y lo agregamos al contenedor
  for (let i = 1; i <= 4; i++) {
    let project2 = projects.cloneNode(true);
    project2.removeAttribute('id');
    project2.setAttribute('id', 'project_' + i);
    contenedor.appendChild(project2);
  }

  let namesProjects = ['Ventas', 'Tareas Electricas', 'Admin Electricas', 'Ricky Web'];


  
  /*
     Aqui seleccionamos la imagen y nombre del proyecto y le cambiamos dichos atributos
  */
  for(let j=1; j <=4; j++) {
    document.querySelector(`#project_${j} img`).setAttribute('src', `../assets/images/projects/project_${j+1}.jpg`);
    document.querySelector(`#project_${j} .name-project a`).innerHTML = namesProjects[j-1];
  }


});