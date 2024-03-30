// // Operador lógico and( &&)

// let verificador = 111;
// let block = 111;
// // E mesmo que um deles seja verdadeiro ele não vai retornar true porque precisa ser as duas condições
// console.log(verificador === block && block >= verificador); // retorna true

let rowUser = 10;
let rowWin = 100;

console.log(rowUser === rowWin && rowWin <= rowUser);

//

let preco = 100;
let desconto = preco - 100 * 0.5;
let produtoPromocao = "Blusa";

const aplicarDesc =
  (preco = 100) && desconto <= 100 && produtoPromocao === "Blusa";

console.log(aplicarDesc);
