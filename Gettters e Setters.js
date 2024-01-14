function criaProduto() {
    return {
        get nome() {
           return this._nome; 
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            this._nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);