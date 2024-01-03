// Função construtora
// Função fábrica -> objetos
// Construtora -> Pessoa
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privadas
  const ID = 123456;

  const metodoInterno = function() {

  };
  
  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um método');
  }
}

const p1 = new Pessoa('Sabrina', 'Vieira');
const p2 = new Pessoa('Maria', 'Vieira');
p1.metodo();

console.log(p1.nome);