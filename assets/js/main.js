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

    if (seleciona) {
      $('header').animate({ marginLeft: '80%' });
      menu.animate({ marginLeft: '0px' });
      content.addClass('mover-content');

    } else {

      content.removeClass('mover-content');
      $('header').animate({ marginLeft: '0%' });
      menu.animate({ marginLeft: '-80%' });
      console.log(miscroll);


    }

  }

  let projects = document.querySelector('#port');
  let contenedor = document.querySelector('#contenedor');

  for (let i = 1; i <= 4; i++) {
    let project2 = projects.cloneNode(true);
    project2.removeAttribute('id');
    project2.setAttribute('id', 'project_' + i);

    contenedor.appendChild(project2);

    document.querySelector(`#project_${i}`).style.backgroundImage = `url(../assets/images/projects/project_${i}.jpg)`;
  }


});

