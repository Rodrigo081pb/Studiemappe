/* 
    O que é uma função


    - Uma ação para executar algo 

*/

let pao = 0;

function assar() {
  if (pao === 0) {
    console.log("Assadeira vázia insira pães");
  } else {
    console.log("A assadeira suporta apenas 2 pães");
  }

  console.log("ligando o forno e preparando seu pão");

  setTimeout(function () {
    console.log("Plim");
  }, 4 * 1000);
}

assar();

// Exemplo professor

function torrar() {
  console.log("Torrando pães");
}
