// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const nome = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map(function(obj, indice) {
    obj.id = (indice + 1) * 1000; 
    obj.id = indice;
    return obj;
});
console.log(idade);
