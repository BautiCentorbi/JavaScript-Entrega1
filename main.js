let cantidadJugadores = parseInt(prompt("Ingrese la cantidad de jugadores que desea analizar"));
let jugadoresTotales = [];

for (let i = 0; i < cantidadJugadores; i++) {
    jugadoresTotales[i] = [prompt("Nombre Jugador " + (i + 1)), 0];
}

let partidosTotales = parseInt(prompt("Ingrese la cantidad de partidos que desee analizar"));
let puntosPartido = [];

// Funcion Promedio
function promediarEstadistica (estadistica, mensaje){
    let estadisticaPartido = []

    for (let m = 0; m < partidosTotales; m++) {
        for (let i = 0; i < cantidadJugadores; i++) {
            estadisticaPartido[m] = estadisticaPartido[m] || []
            estadisticaPartido[m][i] = parseInt(prompt(`¿Cuántos ${mensaje} hizo ${jugadoresTotales[i][0]} en el partido ${m + 1}?`))
        }
    }   
    for (let i = 0; i < cantidadJugadores; i++) {
        let totalEstadistica = 0;

        for (let m = 0; m < partidosTotales; m++) {
            totalEstadistica += estadisticaPartido[m][i];
        }

        const promedioEstadistica = totalEstadistica / partidosTotales
        alert(`El jugador ${jugadoresTotales[i][0]} hizo un promedio de ${promedioEstadistica} ${mensaje} por partido`)
    }
}

let funcionamiento = true

while (funcionamiento == true) {
    let decisionUsuario = parseInt(prompt("¿Qué estadística deseas calcular? Selecciona el número correspondiente a cada acción por favor:\n 1. Puntos\n 2. Rebotes\n 3. Asitencias\n 4. Salir"))
    switch (decisionUsuario){
        case 1:
            promediarEstadistica([], "puntos")
            break;
        case 2:
            promediarEstadistica([], "rebotes")
            break;
        case 3:
            promediarEstadistica([], "asistencias")
            break;
        case 4:
            funcionamiento = false
            break;
        default:
            alert(`Has ingresado un valor incorrecto, por favor intenta de nuevo`)
            continue;
    }
    if (funcionamiento) {
        let usoSimulador = prompt("¿Deseas realizar otro cálculo? Si/No").toLowerCase()
        if (usoSimulador === "no"){
            funcionamiento = false
        } else if (usoSimulador !== "si"){
            alert("Has ingresado una opción incorrecta, por favor intenta de nuevo")
        }
    }
}

