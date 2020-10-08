const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const formularioLoguin = document.querySelector("#formularioLoguin");
let infoPacientes = JSON.parse(localStorage.getItem("pacientes"));

formularioLoguin.addEventListener("submit", login);
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
  localStorage.setItem("pacientes", JSON.stringify(infoPacientes));
}
function checkLogin() {
  infoPacientes.forEach((paciente) => {
    if (paciente.logueado) {
      console.log("logueado");
    } else {
      console.log("no logueado");
    }
  });
}
checkLogin();
