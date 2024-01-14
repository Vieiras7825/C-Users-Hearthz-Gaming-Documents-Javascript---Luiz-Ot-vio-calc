// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift(" ");
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Sabrina", "Vieira", 1.72, 70);
const p2 = criaPessoa("João", "Lins", 1.8, 80);
const p3 = criaPessoa("Junior", "Vieira", 1.9, 110);
p1.nomeCompleto = "Maria Auxiliadora";
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
