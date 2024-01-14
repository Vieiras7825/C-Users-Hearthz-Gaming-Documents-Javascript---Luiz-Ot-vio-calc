const pessoa = new Object();
pessoa.nome = 'Sabrina';
pessoa.sobrenome = 'Vieira';
pessoa.idade = 30;
pessoa.falarNome = function() {
  console.log(`${this.nome} está falando seu nome.`);
};
pessoa.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa) {
    console.log(pessoa[chave]);
};
