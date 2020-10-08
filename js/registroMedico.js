const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const emailInput = document.querySelector("#email");
const contraseñaInput = document.querySelector("#contraseña");

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
  // console.log(e.target,name);
}
function submitUser(e) {
  e.preventDefault();
  pacientes = JSON.parse(localStorage.getItem("medico"));
  if (pacientes == null) {
    pacientes = [];
  }
  // console.log(userPaciente);
  pacientes.push(userPaciente);

  const s = JSON.stringify(pacientes);
  console.log(s);
  localStorage.setItem("medico", JSON.stringify(pacientes));

  formulario.reset();
}
