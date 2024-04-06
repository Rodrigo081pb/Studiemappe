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
