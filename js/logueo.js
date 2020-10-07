let nombreInput = document.querySelector("#nombre");
let apellidoInput = document.querySelector("#apellido");
let emailInput = document.querySelector("#email");
let contraseñaInput = document.querySelector("#contraseñaRegistro");

let formulario = document.querySelector("#formulario");

let user = {
  nombre: "",
  apellido: "",
  email: "",
  contraseña: "",
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
  user[e.target.name] = e.target.value;
  console.log(e);
}
function submitUser(e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  users.push(user);
  localStorage.setItem("usuarios", JSON.stringify(users));

  formulario.reset();
}
