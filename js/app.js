import Contacto from "./classContacto.js";

//variables globales
// const contactoNuevo = new Contacto(1,'algun nombre', 'apellido', 'sadfsdf@fsdf.com', 23423423);
const agenda = [];
const formularioContacto = document.querySelector("form");
const nombre = document.querySelector("#nombre"),
  apellido = document.querySelector("#apellido"),
  email = document.querySelector("#email"),
  telefono = document.querySelector("#telefono");
console.log(formularioContacto);

// funciones
const crearContacto = (e) => {
  e.preventDefault();
  console.log("desde la funcion crear Contacto");
  //validar los datos ingresados por el usuario
  //crear el objeto con los datos del formulario
  const contactoNuevo = new Contacto(
    1,
    nombre.value,
    apellido.value,
    email.value,
    telefono.value
  );
  //guardar el objeto en un array agenda
  agenda.push(contactoNuevo);
  //guardar la agenda en localstorage
  guardarEnLocalstorage();
  console.log(agenda);
};

const guardarEnLocalstorage = () =>{
    localStorage.setItem('agendaKey', JSON.stringify(agenda));
}

// logica
formularioContacto.addEventListener("submit", crearContacto);
