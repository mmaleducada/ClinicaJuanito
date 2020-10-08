const Especialidad = document.querySelector("#Especialidad");
const Medico = document.querySelector("#medico");
const Horario = document.querySelector("#horario");
const fecha = document.querySelector("#fecha");
const solicitud = document.querySelector("#solicitud");

// Interfaz del usuario
const contenedorTurnos = document.querySelector("#turnos");
const solicitudTurnos = document.querySelector("#aceptar");
let editando;

class Turno {
  constructor() {
    this.turno = [];
  }
  agregarTurno(turno) {
    this.turno = [...this.turno, turno];
    console.log(this.turno);
  }
  eliminarTurno(id) {
    this.turno = this.turno.filter((turno) => turno.id !== id);
  }
  editarTurno(turnoActualizado) {
    this.turno = this.turno.map((turno) =>
      turno.id === turnoActualizado.id ? turnoActualizado : turno
    );
  }
}

class IU {
  impirmirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

    // Agregar clase al tipo de error
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }
    divMensaje.textContent = mensaje;

    // Agregar al DOM
    document
      .querySelector("#contenedor")
      .insertBefore(divMensaje, document.querySelector("#aceptar"));
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  impirmirTurno({ turno }) {
    this.limpiarHTML();

    turno.forEach((turno) => {
      const { Especialidad, Medico, fecha, Horario, solicitud, id } = turno;
      const divTurno = document.createElement("div");
      divTurno.classList.add("turno", "p-3", "estilo-turno");
      divTurno.dataset.id = id; 

      // Especialidad
      const especialidadParrafo = document.createElement("h5");
      especialidadParrafo.classList.add("card-title", "font-weight-bolder", "especialidad-estilo");
      especialidadParrafo.textContent = Especialidad;
      // Medico
      const medicoParrafo = document.createElement("p");
      medicoParrafo.innerHTML = `
      <span class= "font-weight-bolder">Medico: </span> ${Medico}`;
      // Fecha
      const fechaParrafo = document.createElement("p");
      fechaParrafo.innerHTML = `
      <span class= "font-weight-bolder">Fecha: </span> ${fecha}`;
      // Horario
      const horarioParrafo = document.createElement("p");
      horarioParrafo.innerHTML = `
      <span class= "font-weight-bolder">Horario: </span> ${Horario}`;
      // Solicitud
      const solicitudParrafo = document.createElement("p");
      solicitudParrafo.innerHTML = `
      <span class= "font-weight-bolder">Síntomas: </span> ${solicitud}`;

      // Boton para eliminar el turno
      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-danger", "mr-2", "btn-sm");
      btnEliminar.innerHTML = `Eliminar`;
      btnEliminar.onclick = () => eliminarTurno(id);

      // Boton de edicion de turno

      const btnEditar = document.createElement("button");
      btnEditar.classList.add("btn", "btn-info", "boton-editar", "btn-sm");
      btnEditar.innerHTML = `Editar`;
      btnEditar.onclick = () => cargarEdicion(turno);

      // Agregar los  parrafos al divTurno
      divTurno.appendChild(especialidadParrafo);
      divTurno.appendChild(medicoParrafo);
      divTurno.appendChild(fechaParrafo);
      divTurno.appendChild(horarioParrafo);
      divTurno.appendChild(solicitudParrafo);
      divTurno.appendChild(btnEliminar);
      divTurno.appendChild(btnEditar);

      // Agregar turnos al HTML
      contenedorTurnos.appendChild(divTurno);
    });
  }
  limpiarHTML() {
    while (contenedorTurnos.firstChild) {
      contenedorTurnos.removeChild(contenedorTurnos.firstChild);
    }
  }
}

const iu = new IU();
const administrarTurno = new Turno();
//  Registro de eventos

eventListeners();
function eventListeners() {
  Especialidad.addEventListener("input", datosTurnos);
  Medico.addEventListener("input", datosTurnos);
  Horario.addEventListener("input", datosTurnos);
  fecha.addEventListener("input", datosTurnos);
  solicitud.addEventListener("input", datosTurnos);
  solicitudTurnos.addEventListener("submit", nuevoTurno);
}

// Objeto con la info del turno

let turnoObj = {
  Especialidad: "",
  Medico: "",
  fecha: "",
  Horario: "",
  solicitud: "",
};

// Agrega los datos al objeto de turnos

function datosTurnos(e) {
  turnoObj[e.target.name] = e.target.value;
}

// valida y agrega un nuevo turno
function nuevoTurno(e) {
  e.preventDefault();

  //  Extraer la info del objeto de turnos
  const { Especialidad, Medico, fecha, Horario, solicitud } = turnoObj;

  // validar
  if (
    Especialidad === "" ||
    Medico === "" ||
    fecha === "" ||
    Horario === "" ||
    solicitud === ""
  ) {
    iu.impirmirAlerta("Todos los campos son obligatorios", "error");
    return;
  }
  if (editando) {
    iu.impirmirAlerta("Se editó correctamente");

    // pasar el objeto de la cita al de edicion
    administrarTurno.editarTurno({ ...turnoObj });
    // texto del boton a su estado original
    solicitudTurnos.querySelector('button[type="submit"]').textContent =
      "Solicitar";
    editando = false;
  } else {
    // creando nuevos turnos
    turnoObj.id = Date.now();
    administrarTurno.agregarTurno({ ...turnoObj });

    // Mensaje de agregado correctamente

    iu.impirmirAlerta("Se agrego correctamente");
  }
  // Reiniciar el objeto para la validacion
  reiniciarObjeto();

  // Reinicio de formulario

  aceptar.reset();

  // Mostrar el HTML de los turnos

  iu.impirmirTurno(administrarTurno);
}

function reiniciarObjeto() {
  turnoObj.Especialidad = "";
  turnoObj.Medico = "";
  turnoObj.fecha = "";
  turnoObj.Horario = "";
  turnoObj.solicitud = "";
}

function eliminarTurno(id) {
  // Eliminar turno
  administrarTurno.eliminarTurno(id);
  // Muestro mensaje
  iu.impirmirAlerta("Turno eliminado", "error");
  // Actualizar turnos
  iu.impirmirTurno(administrarTurno);
}

// Carga los datos y modo edicion

function cargarEdicion(turnos) {
  console.log(turnos);
  // llenar los input
  Especialidad.value = turnos.Especialidad;
  Medico.value = turnos.Medico;
  fecha.value = turnos.fecha;
  Horario.value = turnos.Horario;
  solicitud.value = turnos.solicitud;

  // Llenar el objeto
  turnoObj = turnos;

  // Cambiar el texto del boton

  solicitudTurnos.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";

  editando = true;
}
