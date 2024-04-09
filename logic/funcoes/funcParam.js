// Função com parâmetros

// Exemplo meu

torrar("Pão de forma");

// o que está entr (são variáveis por isso no nome cliente eu so fiz atribuir um valor a aquela variável)
function torrar(pao, nomeCliente) {
  nomeCliente = "Rodrigo";
  console.log(
    `torrada feita com ${pao} e o nosso cliente ${nomeCliente} está muito satisfeito ao comer a torrada de ${pao}`
  );
}

// Exemplo professor

torradeira("Pão integral", "Rodrigo", 20.5);
torradeira("Pão integral");

function torradeira(pao, nome = "Cliete", valor = 20.5) {
  console.log("Torrada feita com " + pao);
  console.log("é um pedido de " + nome);
  console.log("O valor total do seu pedido foi de : " + valor);
}
