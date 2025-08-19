// Definimos las opciones del juego
type Jugada = 'piedra' | 'papel' | 'tijera' | 'lagarto' | 'spock';

// Regla del juego: qué gana a qué
const reglas: { [key in Jugada]: Jugada[] } = {
    piedra: ['tijera', 'lagarto'],
    papel: ['piedra', 'spock'],
    tijera: ['papel', 'lagarto'],
    lagarto: ['papel', 'spock'],
    spock: ['piedra', 'tijera']
};

// Función principal para manejar las jugadas
function jugada(usuario: Jugada): void {
    // Generar una jugada aleatoria para la computadora
    const computadora = obtenerJugadaAleatoria();
    
    // Comparar las jugadas y obtener el resultado
    const resultado = compararJugada(usuario, computadora);
    
    // Mostrar el resultado en la página web
    mostrarResultado(usuario, computadora, resultado);
}

// Función que obtiene una jugada aleatoria para la computadora
function obtenerJugadaAleatoria(): Jugada {
    const opciones: Jugada[] = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

// Función para comparar las jugadas
function compararJugada(usuario: Jugada, computadora: Jugada): string {
    if (usuario === computadora) {
        return "¡Es un empate!";
    }

    // Usar indexOf en lugar de includes para asegurar compatibilidad
    if (reglas[usuario].indexOf(computadora) !== -1) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}

// Función que muestra el resultado en la interfaz
function mostrarResultado(usuario: Jugada, computadora: Jugada, resultado: string): void {
    const resultElement = document.getElementById('result')!;
    resultElement.innerHTML = `
        <p>Tú elegiste: <strong>${usuario}</strong></p>
        <p>La computadora eligió: <strong>${computadora}</strong></p>
        <p><strong>${resultado}</strong></p>
    `;
}

// Exponer la función jugada para que se pueda llamar desde el HTML
(window as any).jugada = jugada;
