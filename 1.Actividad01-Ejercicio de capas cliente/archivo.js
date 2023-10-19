// Obtén la referencia al elemento del pie de página
const fechaElemento = document.getElementById('fecha');

// Obtiene la fecha actual
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const año = fechaActual.getFullYear();

// Formatea la fecha como "dd/mm/yyyy"
const fechaFormateada = `${dia}/${mes}/${año}`;

// Inserta la fecha en el elemento del pie de página
fechaElemento.textContent = `Fecha: ${fechaFormateada}`;