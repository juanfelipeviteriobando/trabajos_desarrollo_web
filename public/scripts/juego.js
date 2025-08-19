"use strict";
// Regla del juego: qué gana a qué
const reglas = {
    piedra: ['tijera', 'lagarto'],
    papel: ['piedra', 'spock'],
    tijera: ['papel', 'lagarto'],
    lagarto: ['papel', 'spock'],
    spock: ['piedra', 'tijera']
};
// Función principal para manejar las jugadas
function jugada(usuario) {
    // Generar una jugada aleatoria para la computadora
    const computadora = obtenerJugadaAleatoria();
    // Comparar las jugadas y obtener el resultado
    const resultado = compararJugada(usuario, computadora);
    // Mostrar el resultado en la interfaz
    mostrarResultado(usuario, computadora, resultado);
}
// Función que obtiene una jugada aleatoria para la computadora
function obtenerJugadaAleatoria() {
    const opciones = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}
// Función que compara las jugadas del usuario y la computadora
function compararJugada(usuario, computadora) {
    if (usuario === computadora) {
        return "¡Es un empate!";
    }
    // Usar indexOf en lugar de includes para mayor compatibilidad
    if (reglas[usuario].indexOf(computadora) !== -1) {
        return "¡Ganaste!";
    }
    else {
        return "¡Perdiste!";
    }
}
// Función que muestra el resultado en la interfaz (usamos el DOM)
function mostrarResultado(usuario, computadora, resultado) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Tú elegiste: <strong>${usuario}</strong></p>
        <p>La computadora eligió: <strong>${computadora}</strong></p>
        <p><strong>${resultado}</strong></p>
    `;
}
// Exponer la función jugada para que se pueda llamar desde el HTML
// Esto es necesario para interactuar con los botones en el HTML
window.jugada = jugada;
