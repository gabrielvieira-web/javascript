let instrumentos = {
    percussao: "Bateria",
    harmonia: ["Violão", "Teclado", "Violino"],
    melodia: "Voz",
    musica: function() {
        console.log("Estamos tocando Uma Coisa da banda Morada!")
    }
}

console.log(instrumentos.percussao)
console.log(instrumentos.harmonia[0])
console.log(instrumentos.melodia)

instrumentos.musica()