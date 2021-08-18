

const form = document.querySelector('.form')
const input = document.querySelector('.input');
const btn = document.querySelector('.btn-add');
const ul = document.querySelector('.ul');

const pendientes = document.querySelector('.pendientes')


pendientes.innerHTML='No tienes tareas pendientes'


//addEventListener
form.addEventListener('submit', e=> {
    e.preventDefault()
   // console.log(e.target[0].value)
   //vacio pendientes
   pendientes.innerHTML=''
   //Funcion 
   tareasPendientes(e);
})


//Fuction
const tareasPendientes = e =>{
    //Validacion
    if(input.value.trim() === ''){
        console.log('vacio')
        return
    }
    //FIN Validacion

    //guardo el valor del imput
    const inputValue = input.value;

    const li = document.createElement('li');
    const closeBTN = document.createElement('button')
    closeBTN.classList='cerrarButton'
    closeBTN.textContent='X'
    li.appendChild(closeBTN)
    const p = document.createElement('p');
    


    p.textContent = inputValue;

    li.appendChild(p)
    ul.appendChild(li)

    input.value=''
    input.focus()

}





const closeButton=()=>{
    closeBTN.addEventListener('click', ()=>{
        inputValue=''
    });
}





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