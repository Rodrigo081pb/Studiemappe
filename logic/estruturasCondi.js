let ligado = "Ligada";

//Se a luz estiver "desligada" execute tal no caso se estiver no false execute tal e se tiver no true execute outra no exemplo abaixo eu coloquei pra que se fosse === "Desligado" então execute tal o ELSE serve pra tudo que não for igual a aquele determinado comando de execução ser executada

if (ligado === "Desligada") {
  console.log("A luz está apagada");
} else {
  console.log("A luz está ligada");
}

// Outra situação

let habilitacao = 2;
let automovel = "Carro";

if (habilitacao === 3 || automovel === "Rata") {
  console.log("Você possui habilitação do tipo A e dirige um belo carro");
} else if (automovel === "Moto" || habilitacao === 2) {
  console.log("Você possui habilitação do tipo B e dirige uma bela moto");
}

// Outra situação exemplo do professor

let possuiOvos = false;
let itensComprados = "";

if (possuiOvos) {
  itensComprados = ["Ovos", "Feijão", "Arroz", "Batata"];
} else {
  console.log("Como não tinha fui na Sessão dos congelados");
  itensComprados = ["Hamburguer", "Cupim", "Lasanha", "Pizza"];
}

console.log(`Os itens comprados foram: ${itensComprados}`);

// Usando o famoso senão se (Exemplo autodidata)

/* A lógica abaixo é pra verificar o perfil de condutor e de acordo com o número/tipo de condutor ele executa determinado resultado através do console */

const perfilCondutor = 3;
let automovelTeste = "";
let valor = "";
let nome = "Venancio";

if (perfilCondutor === 1) {
  automovelTeste = `Como você gosta de ar livre, e adrenalina você tem vocação para pilotar motos`;
  valor = `Você pode estar adquirindo sua Primeira moto pelo valor de 30K e leva desconto na habilitação`;

  console.log(
    "*****************************************************************"
  );
  console.log(
    "*                                                               *"
  );
  console.log(
    "*           Bem vindo ao teste vocação pra condutor             *"
  );
  console.log(
    `*                        ${nome}                                *`
  );
  console.log(
    "*                                                              *"
  );
  console.log(
    "*Resultado :                                                   *"
  );
  console.log(
    `${automovelTeste}                                                `
  );
  console.log(
    `${valor}                                                         `
  );
  console.log(
    "*                                                              *"
  );
  console.log(
    "*****************************************************************"
  );
} else if (perfilCondutor === 2) {
  automovelTeste = "Carro";
  valor = "R$ 190.000,00";
  console.log(
    "**************************************************************************"
  );
  console.log(
    "*                                                                        *"
  );
  console.log(
    "*           Bem vindo ao teste vocação pra condutor                      *"
  );
  console.log(
    `*                        ${nome}                                         *`
  );
  console.log(
    "*                                                                       *"
  );
  console.log(
    "*Resultado :                                                            *"
  );
  console.log(
    "*Como você gosta de conforto e sair com a família em finais de semana   *"
  );
  console.log(
    ` O veiculo ideal pra você é um ${automovelTeste}                          `
  );
  console.log(
    `                                                                          `
  );
  console.log(
    ` No valor de ${valor} você pode estar adquirindo a sua BMW 0km ${nome}    `
  );
  console.log(
    "*                                                                       *"
  );
  console.log(
    "**************************************************************************"
  );
} else {
  automovelTeste = "Caminhão";
  valor = "R$ 800.000,00";
  console.log(
    "********************************************************************************************************************"
  );
  console.log(
    "*                                                                                                                  *"
  );
  console.log(
    "*           Bem vindo ao teste vocação pra condutor                                                                *"
  );
  console.log(
    `*                        ${nome}                                                                                   *`
  );
  console.log(
    "*                                                                                                                 *"
  );
  console.log(
    "*Resultado :                                                                                                      *"
  );
  console.log(
    "*Como você não gosta nem de ar livre e nem de ter muita conformidade está sempre eletrico                         *"
  );
  console.log(
    ` O veiculo ideal pra você é um ${automovelTeste}                                                                    `
  );
  console.log(
    `                                                                                                                    `
  );
  console.log(
    `Seu ${nome} temos um veículo que é de acordo com a sua vocação uma Mercedes Benz novinha no valor de apenas ${valor}`
  );
  console.log(
    "*                                                                                                                 *"
  );
  console.log(
    "********************************************************************************************************************"
  );
}

console.log(perfilCondutor);
