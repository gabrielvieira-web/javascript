// length

var arr = [1,2,3,4,5]

console.log(arr.length)

// push - adicionando no fim do array

arr.push(6)
arr.push('Qualquer coisa')

console.log(arr)

// pop - removendo no fim do array

arr.pop()

console.log(arr)

// unshift - adicionando no começo do array

arr.unshift(0)
arr.unshift('teste')

console.log(arr)

// shift - removendo no começo do array

arr.shift()

console.log(arr)

// acessar o ultimo elemento

console.log(arr[arr.length - 1])

// isArray

console.log(Array.isArray(5))

console.log(Array.isArray(arr))

