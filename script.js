document.addEventListener('DOMContentLoaded', function () {
    const cedulaEl = document.getElementById('cedula');
    if (cedulaEl) {
        cedulaEl.addEventListener('input', function () {
            // Permitir solo valores numéricos
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }

    const telefonoEl = document.getElementById('telefono');
    if (telefonoEl) {
        telefonoEl.addEventListener('input', function () {
            // Permitir números, guiones y espacios
            this.value = this.value.replace(/[^0-9\-\s]/g, '');
        });
    }
});