function Pessoa(_nome, _nascimento, _sexo,_email, _conhecimentos, _estado) {
  let nome = _nome
  let nascimento = new Date(_nascimento)
  let sexo = _sexo
  let email = _email
  let conhecimentos = _conhecimentos
  let estado = _estado

  this.setNome = _nome => nome = _nome
  this.getNome = () => nome

  this.setNascimento = _nascimento => nascimento = _nascimento
  this.getNascimento = () => nascimento

  this.setSexo = _sexo => sexo = _sexo
  this.getSexo = () => sexo

  this.setEmail = _email => email = _email
  this.getEmail = () => email

  this.setConhecimentos = _conhecimentos => conhecimentos = _conhecimentos
  this.getConhecimentos = () => conhecimentos

  this.setEstado = _estado => estado = _estado
  this.getEstado = () => estado

  this.getNascimentoFormatado = () => `${nascimento.getDate()}/${nascimento.getMonth() + 1}/${nascimento.getFullYear()}`
}

document.getElementById('enviar').onclick = teste

function teste(e) {
  e.preventDefault()

  // Pegando dados do formulário
  let nome = document.getElementById('nome').value
  let nascimento = formatarData(document.getElementById('nascimento'))

  // Pegando o valor do Button Radio aka Radio Button(btn)
  let rbn = document.querySelectorAll('input[name="sexo"]')
  let sexo
  rbn.forEach(function(_elemento) {
    if(_elemento.checked)
      sexo = _elemento.value
  })

  // Pegando os valores selecionados do Checkbox(ckb)
  let ckb = document.querySelectorAll('input[name="ckbConhecimentos"]')
  let conhecimentos = []
  ckb.forEach(function(_elemento) { 
    if(_elemento.checked)
      conhecimentos.push(_elemento.value)
  })

  // Pegando o elemento option com os Estados
  let listaEstados = document.getElementById('estados')
  let estado = listaEstados.value

  let email = document.getElementById('email').value

  let pessoa = new Pessoa(nome, nascimento, sexo, email, conhecimentos, estado)

  mostrarFormulario(pessoa)
}

function formatarData(_data) { // _data está chegando no formato yyyy/dd/MM
  let vetorData = String(_data.value).split('-', 3) // Vetor ["yyyy", "dd", "MM"]
  let dataISO = `${vetorData[1]}/${vetorData[2]}/${vetorData[0]}` // MM/dd/yyyy

  let data = new Date(dataISO)

  return data
}

function mostrarFormulario(_pessoa = new Pessoa()) {

  console.log(`${_pessoa.getNome()}`)
  console.log(`${_pessoa.getNascimentoFormatado()}`)
  console.log(`${_pessoa.getSexo()}`)
  console.log(`${_pessoa.getEmail()}`)
  console.log(`${_pessoa.getConhecimentos()}`)
  console.log(`${_pessoa.getEstado()}`);
}