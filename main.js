let estudiantes = []


const miformulario = document.querySelector("#miformulario")

miformulario.addEventListener("submit",function (event){
event.preventDefault();
})

const formData = new FormData(miformulario);

const nombreInput = formData.get("nombre");
const apellidoInput = formData.get("apellido");
const edadInput = formData.get("edad");
const idInput = formData.get("id");

const nuevoContacto = crearObjetoContacto
(nombreInput, telefonoInput, emailInput);
