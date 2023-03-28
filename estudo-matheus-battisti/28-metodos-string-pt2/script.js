// toLowerCase e toUpperCase

var frase = "Está é a frase que vamos manipular"

var fraseCaixaAlta = frase.toLocaleUpperCase()

console.log(fraseCaixaAlta)

console.log(fraseCaixaAlta.toLocaleLowerCase())

// trim 

var nome = "             Matheus           "

var nomeTrim = nome.trim() 

console.log(nome)
console.log(nomeTrim)

// split

console.log(frase.split(" "))

var tags = "PHP, JavaScript, HTML, CSS"

console.log(tags.split(", "))

// lastIndexOf

var fraseDois = "Eu quero a ultima palavra teste desta frase de teste"

console.log(fraseDois.indexOf("teste")) // primeira

console.log(fraseDois.lastIndexOf("teste")) // ultima