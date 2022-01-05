let pilotos = ['Vettel', 'Verstappen', 'Leclerc', 'Russel', 'Sains']

console.log(`Todos os pilotos: ${pilotos}\n`)

//#region Remover e Adicionar na última posição

// Remover o último elemento do array
pilotos.pop()
console.log(`1. Pop (${pilotos})`)

// Adicionando um elemento a última posição
pilotos.push('Perez')
console.log(`2. Push (${pilotos})`)

//#endregion

//#region Remover e Adicionar na primeira posição

// Remover o primeiro elemento do array
pilotos.shift()
console.log(`3. Shift (${pilotos})`)

// Adicionando um elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(`4. Unshift (${pilotos})`)

//#endregion

//#region Splice

/*
  (indice A, indice B, elementos)
  indice A - índice a onde vai começar
  indice B - quantidade de elemtos que serão removidos
  elementos - elemento(s) que será(ão) adicionado(s)
*/

// splice - Adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Garsly')
console.log(`5. Splice - Adicionar (${pilotos})`)

// splice - Remover elementos
pilotos.splice(4, 1)
console.log(`5.1 Splice - Remover (${pilotos})`)

// splice - Remover e Adicionar
pilotos.splice(4, 2, 'Alonso', 'Massa', 'Button')
console.log(`5.2 Splice - Remover e Adicionar (${pilotos})`)

//#endregion

//#region Slice

// Pegar os elementos do array apartir de um índice, retorna um novo array

//(indice Inicial, indice Final)
let pilotosNoPodio = pilotos.slice(0, 3)
console.log(`6. Slice (${pilotosNoPodio})`);

//#endregion