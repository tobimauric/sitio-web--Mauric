document.addEventListener('DOMContentLoaded', () => {
    const btnVerMas = document.getElementById('btn-ver-mas');
    const seccionDistinciones = document.getElementById('distinciones');

    if (btnVerMas && seccionDistinciones) {
        btnVerMas.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Hacemos visible la sección si estaba oculta
            seccionDistinciones.classList.add('visible');
            
            // Desplazamiento suave hacia la sección
            seccionDistinciones.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
