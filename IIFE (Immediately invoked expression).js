// IIFE -> Immediately invoked function expression
(function(idade, pesso, altura) {
    const sobrenome = 'Vieira';
    function crianOme(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Sabrina'));
    }

    falaNome();
    console.log(criaNome('Sabrina'));

})(30, 80, 1.80);



