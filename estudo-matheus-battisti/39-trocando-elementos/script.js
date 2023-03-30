// criar um elemento

var el = document.createElement("h3")

el.classList = "testando-classe"

var texto = document.createTextNode("Esse é o texto do h3")

el.appendChild(texto)

console.log(el)

// selecionar o elemento que quero trocar 

var title = document.querySelector("#title")

console.log(title)

// selecionar o pai do elemento

var pai = title.parentNode

// trocar os elementos 

pai.replaceChild(el, title)