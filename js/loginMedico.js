const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const formularioLoguin = document.querySelector("#formularioLoguin");
const btnMireTurno = document.querySelector("#medicoNone");
const btnCerrarSesion = document.querySelector("#btnCerrarsesion");
const btnIngresar = document.querySelector("#btnIngresar");
let infoMedicos = JSON.parse(localStorage.getItem("medico"));

formularioLoguin.addEventListener("submit", loginM);
btnCerrarSesion.addEventListener("click", logoutM);

function loginM(e) {
  e.preventDefault();
  console.log(infoMedicos);
  infoMedicos.forEach((medicos) => {
    if (
      medicos.contraseña === passwordInput.value &&
      medicos.email === emailInput.value
    ) {
      medicos.logueado = true;
      setLocalM();
      location.reload();
    } else {
      console.log("incorrecto");
    }
  });
}
function setLocalM() {
  localStorage.setItem("medico", JSON.stringify(infoMedicos));
}
function checkLoginM() {
  infoMedicos.forEach((medico) => {
    if (medico.logueado) {
      btnMireTurno.classList.remove("d-none");
      btnIngresar.classList.add("d-none");
      btnCerrarSesion.classList.remove("d-none");
    } else {
      console.log("no registrado");
    }
  });
}
checkLoginM();

function logoutM() {
  console.log("entro logout");
  infoMedicos.forEach((medicos) => {
    medicos.logueado = false;
    setLocalM();
    location.reload();
  });
}
