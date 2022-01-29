import * as fs from 'fs'

/*fs.readFile('./Estudos JSON/Alunos.json', 'utf-8', (_error, jsonString) => {
  if (_error) {
    console.error(`Erro na leitura do arquivo Json: ${_error}`);
  } else {
    try {
      const data = JSON.parse(jsonString)
      console.log(data)
    } catch (error) {
      console.error(`Erro JSON.parse: ${error}`)
    }
  }
})*/

let jsonString

try {
  jsonString = fs.readFileSync('./Estudos JSON/Alunos.json', 'utf-8')
} catch (error) {
  console.error(`Erro ao ler arquivo JSON: ${error}`)
}

console.log(jsonString)
console.log(JSON.parse(jsonString))