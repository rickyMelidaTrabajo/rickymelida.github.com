$(document).ready(function () {


  var btnMenu = document.querySelector("#icono-menu");
  var miscroll = $(window).scrollTop();
  var img1 = document.querySelector("#img_1");

  btnMenu.addEventListener("change", verMenu, false);


  var tamaho = screen.width;
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
      $('ul li:nth-child(3)').attr('id', 'selec-item');
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
    var headerHab = document.querySelector('header');


    if (seleciona) {
      $('header').animate({ marginLeft: '80%' });
      menu.animate({ marginLeft: '0px' });
      content.addClass('mover-content');
      headerHab.removeAttribute('id');
    } else {

      content.removeClass('mover-content');
      $('header').animate({ marginLeft: '0%' });
      menu.animate({ marginLeft: '-80%' });
      console.log(miscroll);
      headerHab.setAttribute('id', 'header-habilidades');


    }

  }

  let projects = document.querySelector('.projects');
  let contenedor = document.querySelector('#contenedor');

  // let project2 = projects.cloneNode(true);
  
  for (let i = 1; i <= 4; i++) {
    let project2 = projects.cloneNode(true);
    project2.removeAttribute('id');
    project2.setAttribute('id', 'project_' + i);
    contenedor.appendChild(project2);
  }

  let imagen = document.querySelector('#project_1 img');
  let tituloProject = document.querySelector('#project_1 .name-project a');

  imagen.setAttribute('src', `../assets/images/projects/project_2.jpg`)
  tituloProject.innerHTML = "Ventas";



  let imagen1 = document.querySelector('#project_2 img');
  let tituloProject1 = document.querySelector('#project_2 .name-project a');

  imagen1.setAttribute('src', `../assets/images/projects/project_3.jpeg`);
  tituloProject1.innerHTML = 'Tareas Electricas';


  let imagen2 = document.querySelector('#project_3 img');
  let tituloProject2 = document.querySelector('#project_3 .name-project a');

  imagen2.setAttribute('src', `../assets/images/projects/project_4.jpeg`);
  tituloProject2.innerHTML = 'Admin Electricas';

  let imagen3 = document.querySelector('#project_4 img');
  let tituloProject3 = document.querySelector('#project_4 .name-project a');

  imagen3.setAttribute('src', `../assets/images/projects/project_5.png`);
  tituloProject3.innerHTML = 'Ricky Web';





});

