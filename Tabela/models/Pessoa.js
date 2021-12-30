export default function Pessoa(_nome, _cpf, _email) {
  let nome = _nome
  let CPF = _cpf
  let email = _email

  this.setNome = _nome => nome = _nome
  this.getNome = () => nome

  this.setCPF = _cpf => CPF = _cpf
  this.getCPF = () => CPF

  this.setEmail = _email => email = _email
  this.getEmail = () => email
}