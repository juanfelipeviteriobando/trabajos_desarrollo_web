// Regla del juego: qué gana a qué
var reglas = {
    piedra: ['tijera', 'lagarto'],
    papel: ['piedra', 'spock'],
    tijera: ['papel', 'lagarto'],
    lagarto: ['papel', 'spock'],
    spock: ['piedra', 'tijera']
};
// Función principal para manejar las jugadas
function jugada(usuario) {
    // Generar una jugada aleatoria para la computadora
    var computadora = obtenerJugadaAleatoria();
    // Comparar las jugadas y obtener el resultado
    var resultado = compararJugada(usuario, computadora);
    // Mostrar el resultado en la interfaz
    mostrarResultado(usuario, computadora, resultado);
}
// Función que obtiene una jugada aleatoria para la computadora
function obtenerJugadaAleatoria() {
    var opciones = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
    var indiceAleatorio = Math.floor(Math.random() * opciones.length);
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
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "\n        <p>T\u00FA elegiste: <strong>".concat(usuario, "</strong></p>\n        <p>La computadora eligi\u00F3: <strong>").concat(computadora, "</strong></p>\n        <p><strong>").concat(resultado, "</strong></p>\n    ");
}
// Exponer la función jugada para que se pueda llamar desde el HTML
// Esto es necesario para interactuar con los botones en el HTML
window.jugada = jugada;
