// Objetos - Criando e manipulando Vetores e matrizes

// Objeto pokemon
const pokemon = ["Rayquaza", "Mewtwo", "Charyzard"];

// Pegando apenas um item do meu objeto Pokemon o item 0 é o primeiro o 1 é no caso o Mewtwo as posições não começam do 1 e sim do 0.

console.log(pokemon[0]);

/* _____________________________ */
// Ao digitar o nome da variável e um . aparecem funções e métodos exemplo:

// Aqui eu estou excluindo o último elemento do meu Vetor

pokemon.pop();

// Observação se caso você chamar a função pop após o console log ou antes da função pra exibir o console log ele não vai excluir ou funcionar

/*_______________________________*/

// O length me proporciona me dizer quantos elementos ou objetos tem dentro do meu Objeto
console.log(pokemon.length);

/*_______________________________*/

// O metodo Push ele consegue atribuir mais elementos ao meu objeto, porém ele segue o mesmo padrão que o .Pop ele apenas aparece e exibe e aplica seu método se for declarado antes da exibição do console

pokemon.push("Chicorita", "Row-Row", "Charmander");

/*_______________________________*/
