const readline = require("readline"); // Importa o módulo readline, que permite interagir com o terminal

const rl = readline.createInterface({
  // Cria uma interface readline para ler e escrever no terminal
  input: process.stdin, // Define a entrada como o terminal padrão
  output: process.stdout, // Define a saída como o terminal padrão
});

async function main() {
  // Define a função principal como assíncrona
  const nome = await askQuestion("Digite seu nome: "); // Pergunta o nome do usuário e espera pela resposta
  console.log("Olá bem vindo à nossa calculadora, " + nome); // Exibe uma mensagem de boas-vindas com o nome do usuário

  console.log("1. ADIÇÃO"); // Exibe as opções de operações matemáticas
  console.log("2. SUBTRAÇÃO");
  console.log("3. MULTIPLICAÇÃO");
  console.log("4. DIVISÃO");

  const operacao = await askQuestion("Digite qual operação deseja realizar: "); // Pergunta a operação desejada e espera pela resposta
  const num1 = parseFloat(await askQuestion("Digite um número: ")); // Pergunta o primeiro número e espera pela resposta, convertendo para float
  const num2 = parseFloat(await askQuestion("Digite outro número: ")); // Pergunta o segundo número e espera pela resposta, convertendo para float

  let resultado; // Declara uma variável para armazenar o resultado da operação
  switch (
    parseInt(operacao) // Inicia uma estrutura de seleção com base na operação escolhida, convertendo a operação para um número inteiro
  ) {
    case 1: // Caso de adição
      resultado = num1 + num2; // Realiza a adição
      console.log(num1 + " + " + num2 + " = " + resultado); // Exibe o resultado da adição
      break;
    case 2: // Caso de subtração
      resultado = num1 - num2; // Realiza a subtração
      console.log(num1 + " - " + num2 + " = " + resultado); // Exibe o resultado da subtração
      break;
    case 3: // Caso de multiplicação
      resultado = num1 * num2; // Realiza a multiplicação
      console.log(num1 + " x " + num2 + " = " + resultado); // Exibe o resultado da multiplicação
      break;
    case 4: // Caso de divisão
      if (num2 !== 0) {
        // Verifica se o segundo número não é zero para evitar divisão por zero
        resultado = num1 / num2; // Realiza a divisão
        console.log(num1 + " / " + num2 + " = " + resultado); // Exibe o resultado da divisão
      } else {
        // Caso o segundo número seja zero
        console.log("Não é possível dividir por zero."); // Exibe uma mensagem de erro
      }
      break;
    default: // Caso a operação escolhida não seja válida
      console.log("Opção inválida"); // Exibe uma mensagem de erro
  }

  rl.close(); // Fecha a interface readline
}

function askQuestion(question) {
  // Define uma função para fazer uma pergunta ao usuário
  return new Promise((resolve) => {
    // Retorna uma promessa
    rl.question(question, (answer) => {
      // Pergunta ao usuário e aguarda uma resposta
      resolve(answer); // Resolve a promessa com a resposta do usuário
    });
  });
}

main(); // Chama a função principal para iniciar o programa
