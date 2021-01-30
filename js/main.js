


// menu

const ham = document.getElementById('ham');
const menu = document.getElementById('menu');
const linea1 = document.getElementById('linea1');
const linea2 = document.getElementById('linea2');
const linea3 = document.getElementById('linea3');
const about = document.getElementById('about-enlace');
const works = document.getElementById('works-enlace');
const contact = document.getElementById('contact-enlace');




function clickMenu() {

linea1.classList.toggle('active');
linea2.classList.toggle('active');
linea3.classList.toggle('active');
menu.classList.toggle('activo');


};

ham.addEventListener('click', clickMenu);


function close() {

  menu.classList.remove('activo');
  linea1.classList.remove('active');
  linea2.classList.remove('active');
  linea3.classList.remove('active');


};

about.addEventListener('click', close);
works.addEventListener('click', close);
contact.addEventListener('click', close);



// FIN MENU
