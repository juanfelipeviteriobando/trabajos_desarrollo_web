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

// Variables para llevar el score
let victoriasJugador = 0;
let victoriasMaquina = 0;
let empates = 0;

// Función principal para manejar las jugadas
function jugar(usuario: Jugada): void {
    // Generar una jugada aleatoria para la computadora
    const computadora = obtenerJugadaAleatoria();
    
    // Comparar las jugadas y obtener el resultado
    const resultado = compararJugada(usuario, computadora);
    
    // Mostrar el resultado en la interfaz
    mostrarResultado(usuario, computadora, resultado);
    
    // Actualizar el score
    actualizarScore(resultado);
}

// Función que obtiene una jugada aleatoria para la computadora
function obtenerJugadaAleatoria(): Jugada {
    const opciones: Jugada[] = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio]; 
}

// Función que compara las jugadas del usuario y la computadora
function compararJugada(usuario: Jugada, computadora: Jugada): string {
    if (usuario === computadora) {
        return "¡Es un empate!";
    }

    // Usar indexOf en lugar de includes para mayor compatibilidad
    if (reglas[usuario].indexOf(computadora) !== -1) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}

// Mapa de jugadas con sus emojis
const emojis: Record<Jugada, string> = {
  piedra: "✊",
  papel: "📄",
  tijera: "✂️",
  lagarto: "🦎",
  spock: "🖖"
};

function mostrarResultado(usuario: Jugada, computadora: Jugada, resultado: string): void {
    const resultElement = document.getElementById('result')!;
    const jugadorElement = document.getElementById('eleccion-jugador')!;
    const maquinaElement = document.getElementById('eleccion-maquina')!;

    // Mostrar la jugada del jugador con emoji y texto
    jugadorElement.innerHTML = `
        ${emojis[usuario]}
        <span>${usuario}</span>
    `;

    // Mostrar la jugada de la máquina con emoji y texto
    maquinaElement.innerHTML = `
        ${emojis[computadora]}
        <span>${computadora}</span>
    `;

    // Mostrar solo el resultado abajo
    resultElement.innerHTML = `<p><strong>${resultado}</strong></p>`;
}


// Función que actualiza el score
function actualizarScore(resultado: string): void {
    if (resultado === "¡Ganaste!") {
        victoriasJugador++;
    } else if (resultado === "¡Perdiste!") {
        victoriasMaquina++;
    } else {
        empates++;    
    }

    // Actualizar los valores en la página
    document.getElementById('victorias-jugador')!.textContent = victoriasJugador.toString();
    document.getElementById('victorias-maquina')!.textContent = victoriasMaquina.toString();
    document.getElementById('empates')!.textContent = empates.toString();
}

// Exponer la función jugar para que se pueda llamar desde el HTML
(window as any).jugar = jugar;
