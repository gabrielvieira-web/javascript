// selecionar elemento

var title = document.querySelector('#title')

// innerHTML
title.innerHTML = "Testando o texto alterado!"


// textContent -> Mais utilizado, recomendado e perfomado

var subtitle = document.querySelector('.subtitle')

console.log(subtitle)

subtitle.textContent = "testando o textContent"