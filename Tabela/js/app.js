import Pessoa from '../models/Pessoa.js'

/* ===== EVENTOS ===== */
document.getElementById('cadastrar').onclick = cadastrar

document.getElementById('botao-editar').onclick = editar
document.getElementById('botao-deletar').onclick = deletar
window.addEventListener("click",function(){
  document.getElementById("contexto-menu").classList.remove("ativado");
})

// ===== GLOBAIS =====
let linhaSelecionada

// ===== OPERAÇÕES =====
function cadastrar() {
  
  let pessoa = pegarDadosFormulario()

  inserirPessoaNaTabela(pessoa)

  ajustaOpacidade()
}
function editar() {

  let linhaPessoaSelecionada = linhaSelecionada

  criarInputAlterar()
  enviarPessoaFormulario(linhaPessoaSelecionada)
  ajustarFormulario()
}
function deletar() {
  linhaSelecionada.parentNode.removeChild(linhaSelecionada)
}
function alterar() {
  
  alterarTabela()
  criarInputCadastrar()
  deletarInputaAlterar()
  reajustarFormulario()
}

// ===== OPERAÇÕES COMPLEMENTARES =====
function pegarDadosFormulario() {
  let nome = document.getElementById('nome').value
  let cpf = document.getElementById('cpf').value
  let email = document.getElementById('email').value

  let pessoa = new Pessoa(nome, cpf, email)

  return pessoa
}

function inserirPessoaNaTabela(_pessoa = new Pessoa()) {
  
  // Verificando se já á algum cpf cadastrado
  if(verificarCPF(_pessoa.getCPF())) {

    // ===== Pegando a tabela e o seus dados =====
    let corpoTabela = document.getElementById('conteudo')
    let quantidadeLinhas = corpoTabela.rows.length

    // ===== Criando uma nova linha e inserindo na tabela =====
    let linha = corpoTabela.insertRow(quantidadeLinhas)
    linha.setAttribute('class', "pessoa")

    linha.addEventListener("contextmenu", tabelaMenuContexto )

    // ===== Criando células e colocando na linha =====
    let celulaNome = linha.insertCell(0)
    let celulaCPF = linha.insertCell(1)
    let celulaEmail = linha.insertCell(2)

    // ===== Preenchendo as células =====
    celulaNome.innerText = _pessoa.getNome()
    celulaCPF.innerText = _pessoa.getCPF()
    celulaEmail.innerText = _pessoa.getEmail()

    // ===== Adicionando uma classe à celulaCPF =====
    celulaCPF.setAttribute('class', "celulaCpf")
    
    mensagemConfirmarCadastro(true)
  }
  else {
    mensagemConfirmarCadastro(false)
  }
}

function ajustaOpacidade() {
  document.getElementById('cabecalho').style.opacity = 1
}

function tabelaMenuContexto(event) {
  event.preventDefault()

  let contextElement = document.getElementById("contexto-menu")

  linhaSelecionada = this // Dados do elemento a onde o event ocorreu, no caso uma linha da tabela

  // Pegando a posição do mouse e definindo o local do contexto-menu
  contextElement.style.top = event.clientY + "px"
  contextElement.style.left = event.clientX + "px"

  contextElement.classList.add("ativado")
}

function verificarCPF(_pessoaCPF) {
  let listaCpfCadastrados = document.querySelectorAll('.celulaCpf')

  let permitirCadastro = true

  listaCpfCadastrados.forEach((_cpfCadastrado, _index) =>{
    if(_pessoaCPF === _cpfCadastrado.innerText)
      permitirCadastro = false
  })

  return permitirCadastro
}

function mensagemConfirmarCadastro(_statusCadastro){

  let div_mensagem = document.getElementById('mensagem-cadastramento')

  if(_statusCadastro) {
    div_mensagem.innerText = "Pessoa Cadastrada com Sucesso"
    div_mensagem.classList.add("cadastro-confirmado")
    div_mensagem.classList.remove("cadastro-negado")
  }
  else {
    div_mensagem.innerText = "Pessoa já cadastrada"
    div_mensagem.classList.remove("cadastro-confirmado")
    div_mensagem.classList.add("cadastro-negado")
  }
}

function enviarPessoaFormulario(_linhaPessoaSelecionada) {

  // Pegando os dados de Pessoa
  let nome = _linhaPessoaSelecionada.children[0].innerText
  let cpf = _linhaPessoaSelecionada.children[1].innerText
  let email = _linhaPessoaSelecionada.children[2].innerText

  // Enviando os dados para o inputa
  document.getElementById('nome').value = nome
  document.getElementById('cpf').value = cpf
  document.getElementById('email').value = email
}

function ajustarFormulario() {
  // Arrumando os Inputs
  document.getElementById('cpf').removeAttribute('required')
  document.getElementById('cpf').setAttribute('readonly', true)

  deletarInputCadastrar()
}

function reajustarFormulario() {
  // Arrumando os Inputs
  document.getElementById('cpf').removeAttribute('readonly', true)
  document.getElementById('cpf').setAttribute('required', true)
}

function deletarInputCadastrar() {
  let inputCadastrar = document.getElementById('cadastrar')
  inputCadastrar.parentNode.removeChild(inputCadastrar)
}

function criarInputCadastrar() {
  let inputCadastrar = document.createElement('input')
  inputCadastrar.setAttribute('id', 'cadastrar')
  inputCadastrar.setAttribute('class', 'input-formulario')
  inputCadastrar.type = 'button'
  inputCadastrar.value = 'Cadastrar'
  inputCadastrar.addEventListener('click',cadastrar)

  document.getElementById('controles').appendChild(inputCadastrar)
}

function deletarInputaAlterar() {
  let inputAlterar = document.getElementById('alterar')
  inputAlterar.parentNode.removeChild(inputAlterar)
}

function criarInputAlterar() {
  let inputAlterar = document.createElement('input')
  inputAlterar.setAttribute('id', 'alterar')
  inputAlterar.setAttribute('class', 'input-formulario')
  inputAlterar.type = 'button'
  inputAlterar.value = 'Alterar'
  inputAlterar.addEventListener('click',alterar)

  document.getElementById('controles').appendChild(inputAlterar)
}

function alterarTabela() {
  let pessoa = pegarDadosFormulario()

  alterarLinhaNaTabela(pessoa)
}

function alterarLinhaNaTabela(_pessoa = new Pessoa()) {
  let corpoTabela = document.getElementById('conteudo').children

  for(let i = 0; i < corpoTabela.length; i++){
    let colunaCPF = corpoTabela[i].children[1].innerText
    if(colunaCPF === _pessoa.getCPF()){
      let colunasDaLinha = corpoTabela[i].children
      colunasDaLinha[0].innerText = _pessoa.getNome()
      colunasDaLinha[2].innerText = _pessoa.getEmail()
    }
  }
}