function cadastrarElemento() {
  // Pegando a lista e o input, respectivamente
  const lista = getElementsList()
  let item = getInputValue()
  let itens = []

  itens = (item.split(','))
  console.log(itens[0])

  for(let i = 0; i < itens.length; i++) {
    if(verificarIgual(itens[i])) {
      let listItem = criarListItem(itens[i])

      lista.appendChild(listItem)
  
      mostrarMensagemCadastrado()
    }
    else { 
      mostrarMensagemErroCadastrar()
    }
  }
}

function deletarElemento() {
  // Pegando a lista e o input, respectivamente
  const elementosLista = document.getElementById('lista').children
  let item = document.getElementById('item').value

  // Verificando se existe algum elemento com o mesmo valor recebido no input para o deletar
  for(let i = 0; i < elementosLista.length; i++){
    if(elementosLista[i].innerText === item)
      elementosLista[i].remove()
  }
}

function pegarElementosLista() {
  // Pegando os elementos da lista e criando um array para armazenar seus valores, respectivamente
  const elementosLista = document.getElementById('lista').children
  let valoresElementos = []

  // Enviando os valores dos elementos da lista para o array
  for (let index = 0; index < elementosLista.length; index++) {
    valoresElementos.push(elementosLista[index].innerText)
  }
  
  console.log(valoresElementos)
}

// Verifica se um elemento já está na lista
function verificarIgual(_elemento) {
  // Pegando a lista com seus elementos
  const elementosLista = document.getElementById('lista').children

  // Verificando se existe algum elemento com o mesmo valor recebido como argumento
  for(let i = 0; i < elementosLista.length; i++){
    if(elementosLista[i].innerText === _elemento)
      return false
  }
  return true
}

function inputClick() {
  let msg = document.getElementById('msg')

  document.getElementById('item').value = ""
  msg.classList.remove('msg_1')
  msg.classList.remove('msg_2')
}

//#region Criar Elementos HTML
function criarListItem(_element) {
  let listItem = document.createElement('li')
  listItem.innerText = _element
  listItem.setAttribute('class', "item-lista")
  return listItem
}
//#endregion

//#region Pegar valores de elementos no HTML
function getInputValue() {
  return document.getElementById('item').value
}
function getElementsList() {
  return document.getElementById('lista')
}
//#endregion

//#region Mensagens
function mostrarMensagemCadastrado() {
  let msg = document.getElementById('msg')

  // Mostrando mensagem confirmando a ação
  msg.innerText = "Cadastrado com sucesso"
  msg.classList.add('msg_2')
  msg.classList.remove('msg_1')
}
function mostrarMensagemErroCadastrar() {
  let msg = document.getElementById('msg')

  // Mostrando mensagem de erro
  msg.innerText = "Elemento já cadastrado"
  msg.classList.remove('msg_2')
  msg.classList.add('msg_1')
}
//#endregion