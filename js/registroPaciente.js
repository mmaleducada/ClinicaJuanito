const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const emailInput = document.querySelector("#email");
const contraseñaInput = document.querySelector("#contraseñaRegistro");

const formulario = document.querySelector("#formulario");
let pacientes;
let userPaciente = {
  nombre: "",
  apellido: "",
  email: "",
  contraseña: "",
  logueado: false,
  aprobado: false,
};

// Event listeners

eventListeners();

function eventListeners() {
  nombreInput.addEventListener("change", datosUser);
  apellidoInput.addEventListener("change", datosUser);
  emailInput.addEventListener("change", datosUser);
  contraseñaInput.addEventListener("change", datosUser);
  formulario.addEventListener("submit", submitUser);
}

function datosUser(e) {
  userPaciente[e.target.name] = e.target.value;
  // console.log(e.target);
}
function submitUser(e) {
  e.preventDefault();
  pacientes = JSON.parse(localStorage.getItem("pacientes"));
  if (pacientes == null) {
    pacientes = [];
  }
  console.log(userPaciente);
  pacientes.push(userPaciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));

  formulario.reset();
}
