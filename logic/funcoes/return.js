// Funções de retorno

let resultado = somar(50, 10);

function somar(num1, num2) {
  let soma = num1 + num2;
  return console.log(
    `O resultado da soma de ${num1} + ${num2} é igual a ${soma}`
  );
}

// Exemplo do professor :

// Inserindo nome
let userName = getFirstName("Kauã Rodrigo De Farias Domar");

console.log(`Seja bem vindo ${userName}`);

// Função para pegar o primeiro nome que se encontra na posição 0
function getFirstName(name) {
  let firstname = name.split(" ")[0]; // pegando a primeira posição do vetor

  // Retornando o primeiro Nome
  return firstname;
}

/* 

    O name.slit(" ") ele vai separar por espaços 

    e logo em seguida ao utilizar um [posição] ele vai pegar apenas aquele primeiro nome

    let firstname = name.split(" ")[0];

*/
