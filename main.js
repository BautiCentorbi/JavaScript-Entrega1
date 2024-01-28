let cantidadJugadores = parseInt(prompt("Ingrese la cantidad de jugadores que desea analizar"));
let jugadoresTotales = [];

for (let i = 0; i < cantidadJugadores; i++) {
    jugadoresTotales[i] = [prompt("Nombre Jugador " + (i + 1)), 0];
}

let partidosTotales = parseInt(prompt("Ingrese la cantidad de partidos que desee analizar"));
let puntosPartido = [];

// PUNTOS
function promediarPuntos() {
    for (let m = 0; m < partidosTotales; m++) {
        for (let i = 0; i < cantidadJugadores; i++) {
            puntosPartido[m] = puntosPartido[m] || []
            puntosPartido[m][i] = parseInt(prompt(`¿Cuántos puntos hizo ${jugadoresTotales[i][0]} en el partido ${m + 1}?`))
        }
    }
    for (let i = 0; i < cantidadJugadores; i++) {
        let totalPuntos = 0;

        for (let m = 0; m < partidosTotales; m++) {
            totalPuntos += puntosPartido[m][i];
        }

        const promedioPuntos = totalPuntos / partidosTotales
        console.log(`El jugador ${jugadoresTotales[i][0]} hizo un promedio de ${promedioPuntos} por partido`)
        let usoSimulador = prompt("¿Deseas realizar otro cálculo? Si/No").toLowerCase()
        if (usoSimulador !== "si"){
            funcionamiento = false
        }
    }
}

promediarPuntos()