//                -5      -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop
const removidos = nomes.splice(-2, 0);
console.log(nomes, removidos);
