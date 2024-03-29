// Operadores de comparação

// Igual A

let numero = "1";

// ele verifica se a variavel é "1" e abaixo ele retorna true
console.log(numero == "1"); //true

/*
    = é atribuição

    == é para comparar o valor

    === é para comparar o valor e o formato do conteudo por exemplo.
   
    !== é diferente ?

    se o código estiver

    let nome = "rodrigo"
    console.log(nome === "rodrigo")

    ele verifica se a variável é um caracter e se tem o nome rodrigo
*/

let nome = 1;
console.log(nome === "1"); // false
console.log(nome == 1); // true

// Diferente

let jogo = "free fire";
console.log(jogo !== "free fire");

// Sistema de embarque

let cpfBlock = "715.217.074-04";
let cpfUser = "715.477.074-01";

let bloqueado = cpfUser === cpfBlock; // o cpfUser é igual a cpfBlock ?

console.log("O usuário pode jogar ? " + bloqueado); // Retorna false

//_______________

let permitido = "222.555.999-01";
let cpfUsuario = "222.555.999-04";

let embarque = cpfUsuario !== permitido; // O cpf do usuário é diferente do cpf permitido ? vai retornar um true

console.log("É um usuário valido ? " + embarque);
