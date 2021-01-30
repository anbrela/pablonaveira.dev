


// menu

const ham = document.getElementById('ham');
const menu = document.getElementById('menu');
const linea1 = document.getElementById('linea1');
const linea2 = document.getElementById('linea2');
const linea3 = document.getElementById('linea3');


function clickMenu() {

linea1.classList.toggle('active');
linea2.classList.toggle('active');
linea3.classList.toggle('active');
menu.classList.toggle('activo');


};

ham.addEventListener('click', clickMenu);





// FIN MENU
