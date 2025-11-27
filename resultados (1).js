
window.addEventListener('DOMContentLoaded', function () {
    // Obtener los parámetros de la URL enviados por el formulario
    const urlParams = new URLSearchParams(window.location.search);

    // Extraer los parámetros de la URL
    const nombre = urlParams.get('nombre') || '';
    const cedula = urlParams.get('cedula') || '';
    const email = urlParams.get('email') || '';
    const telefono = urlParams.get('telefono') || '';
    const tipoExamen = urlParams.get('tipoExamen') || '';
    const fechaExamen = urlParams.get('fechaExamen') || '';

    const getEl = id => document.getElementById(id);

    // Si hay al menos un dato, rellenar los campos visibles
    if (nombre || cedula || email || telefono || tipoExamen || fechaExamen) {
        const elementoNombre = getEl('mostrarNombre');
        const elementoCedula = getEl('mostrarCedula');
        const elementoEmail = getEl('mostrarEmail');
        const elementoTelefono = getEl('mostrarTelefono');
        const elementoTipoExamen = getEl('mostrarTipoExamen');
        const elementoFechaExamen = getEl('mostrarFechaExamen');

        if (elementoNombre) elementoNombre.textContent = decodeURIComponent(nombre);
        if (elementoCedula) elementoCedula.textContent = decodeURIComponent(cedula);
        if (elementoEmail) elementoEmail.textContent = decodeURIComponent(email);
        if (elementoTelefono) elementoTelefono.textContent = decodeURIComponent(telefono);
        if (elementoTipoExamen) elementoTipoExamen.textContent = decodeURIComponent(tipoExamen);
        if (elementoFechaExamen) elementoFechaExamen.textContent = decodeURIComponent(fechaExamen);

        console.log('Datos cargados desde la URL');
    } else {
        console.warn('No se encontraron datos en la URL.');
        const successMsg = document.querySelector('.success-message h1');
        if (successMsg) successMsg.textContent = 'No se encontraron datos del paciente.';
    }
});

function volveralFormulario() {
    // Volver al formulario principal (archivo con espacios en el nombre)
    window.location.href = 'index (1).html';
}