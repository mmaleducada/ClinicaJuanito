const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const formularioLoguin = document.querySelector("#formularioLoguin");
const btnMireTurno = document.querySelector("#medicoNone");
const btnCerrarSesion = document.querySelector("#btnCerrarsesion");
const btnIngresar = document.querySelector("#btnIngresar");
let infoPacientes = JSON.parse(localStorage.getItem("medico"));

formularioLoguin.addEventListener("submit", login);
btnCerrarSesion.addEventListener("click", logout);

function login(e) {
  e.preventDefault();
  console.log(infoPacientes);
  infoPacientes.forEach((paciente) => {
    if (
      paciente.contraseña === passwordInput.value &&
      paciente.email === emailInput.value
    ) {
      paciente.logueado = true;
      setLocal();
      location.reload();
    } else {
      console.log("incorrecto");
    }
  });
}
function setLocal() {
  localStorage.setItem("medico", JSON.stringify(infoPacientes));
}
function checkLogin() {
  infoPacientes.forEach((paciente) => {
    if (paciente.logueado) {
      btnMireTurno.classList.remove("d-none");
      btnIngresar.classList.add("d-none");
      btnCerrarSesion.classList.remove("d-none");
    } else {
      console.log("no registrado");
    }
  });
}
checkLogin();

function logout() {
  console.log("entro logout");
  infoPacientes.forEach((paciente) => {
    paciente.logueado = false;
    setLocal();
    location.reload();
  });
}
