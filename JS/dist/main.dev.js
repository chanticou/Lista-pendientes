"use strict";

var form = document.querySelector('.form');
var input = document.querySelector('.input');
var btn = document.querySelector('.btn-add');
var ul = document.querySelector('.ul');
var pendientes = document.querySelector('.pendientes');
pendientes.innerHTML = 'No tienes tareas pendientes'; //addEventListener

form.addEventListener('submit', function (e) {
  e.preventDefault(); // console.log(e.target[0].value)
  //vacio pendientes

  pendientes.innerHTML = ''; //Funcion 

  tareasPendientes(e);
}); //Fuction

var tareasPendientes = function tareasPendientes(e) {
  //Validacion
  if (input.value.trim() === '') {
    console.log('vacio');
    return;
  } //FIN Validacion
  //guardo el valor del imput


  var inputValue = input.value;
  var li = document.createElement('li');
  var closeBTN = document.createElement('button');
  closeBTN.classList = 'cerrarButton';
  closeBTN.textContent = 'X';
  li.appendChild(closeBTN);
  var p = document.createElement('p');
  p.textContent = inputValue;
  li.appendChild(p);
  ul.appendChild(li);
  input.value = '';
  input.focus();
};

var closeButton = function closeButton() {
  closeBTN.addEventListener('click', function () {
    inputValue = '';
  });
};
/*


noPendientes.innerHTML='No tienes tareas pendientes'
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e);

    noPendientes.innerHTML=''


   

    //guardo el valor del imput
    const inputValue = input.value;

    const li = document.createElement('li');
    const p = document.createElement('p');


    p.textContent = inputValue;

    li.appendChild(p)
    ul.appendChild(li)


    input.value=''

});


*/