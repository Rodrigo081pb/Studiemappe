const heroName = "Indra";
let nivel = 1000;

console.log(`{꧁꧂꧁꧂Bem Vindo ${heroName}꧁꧂꧁꧂`);

function getxp(nivel) {
  if (nivel < 1000) {
    console.log(
      `O herói ${heroName} está no nível Ferro após atingir ${nivel} de Experiência em batalhas`
    );
  } else if (nivel > 1001 && nivel < 2000) {
    console.log(
      `O herói ${heroName} está no nível Bronze após atingir ${nivel} de Experiência em batalhas`
    );
  } else if (nivel > 2001 && nivel < 5000) {
    console.log(
      `O herói ${heroName} está no nível Prata após atingir ${nivel} de Experiência em batalhas`
    );
  } else if (nivel > 5001 && nivel < 8000) {
    console.log(
      `O herói ${heroName} está no nível Platina após atingir ${nivel} de Experiência em batalhas`
    );
  } else if (nivel > 8001 < 9000) {
    console.log(
      `O herói ${heroName} está no nível Ascendente após atingir ${nivel} de Experiência em batalhas`
    );
  } else if (nivel > 9001 && nivel < 10000) {
    console.log(
      `O herói ${heroName} está no nível imortal após atingir ${nivel} de Experiência em batalhas`
    );
  } else if (nivel >= 10001) {
    console.log(
      `O herói ${heroName} está no nível Radiante após atingir ${nivel} de Experiência em batalhas`
    );
  }
}

getxp();

console.log("Hello world!");
