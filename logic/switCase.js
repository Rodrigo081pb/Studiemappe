// Introdução ao SwithCase com javascript

/* Estrutura de decisão

Switc/case/break/default

*/

// Exemplo meu
let frutas = ["Limão", "Laranja", "Maracujá", "Cajá"];
let vitaminas = ["Abacate", "Banana"];

function suco(fruta) {
  console.log(`Fazendo suco de ${fruta}`);
}

function vitamina(vitamina) {
  console.log(`Batendo vitamina de ${vitamina}`);
}

let armario = frutas[2];

switch (armario) {
  case "Limão":
  case "Laranja":
  case "Maracujá":
  case "Cajá":
    suco(armario);
    break;
  default:
    console.log("Não tem frutas na sua casa");
    break;
}

let fruteira = vitaminas[1];

switch (fruteira) {
  case "Abacate":
    vitamina(fruteira);
    break;
  case "Banana":
    vitamina(fruteira);
    break;
  default:
    console.log("Na sua casa não tem nenhum item pra fazer a vitamina");
    break;
}
