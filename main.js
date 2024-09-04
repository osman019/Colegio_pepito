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
const emailInput = formData.get("email");

const nuevoestudiante = crearestudiante
(nombreInput, apellidoInput, edadInput, idInput, emailInput);

agregarestudiante(nuevoestudiante);



function agregarestudiante(estudiantes) {
    try {
        estudiantes.push(estudiantes);
        console.log("si se agrego: ", estudiantes);
    }
    catch (e){
        console.error("no se ha agregado");
    }
}


function crearestudiante(nombreE, apellidoE,idE, emailE){

return {
    nombre: nombreE,
    apellido: apellidoE,
    id: idE,
    email: emailE
}};