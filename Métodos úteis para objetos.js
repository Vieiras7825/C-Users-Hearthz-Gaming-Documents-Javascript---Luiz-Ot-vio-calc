/* Object.assign(des, any)
 Object.getOwnPropertyDescriptor(o, 'prop')
 ... (spread)

Já vimos 
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Caneca', preco: 1.8, material: 'porcelana' };

for(let valor of Object.entries(produto)) {
console.log(valor[0], valor[1]);
}