/*
        Tipos de operadores lógicos

&& = server como se fosse um "e"

° por exemplo você é maior que 18 anos e menor que 1.70

*/

const idade = 18;
const altura = 1.7;

if (idade >= 18 && altura >= 1.7) {
  console.log(
    `Então você pode viajar comigo pois já possui ${idade} e tem altura de ${altura}`
  );
} else {
  console.log(
    `Você não pode viajar comigo pois não tem os requisitos solicitados`
  );
}

/*
    Operador lógico (ou) no javascript é ||

    Ele pergunta ao usuário se ele quer isso ou aquilo exemplo :
*/

const rodrigo = "Rodrigo";
const vini = "Venencios";

if (rodrigo === "Rodrigo" || vini === "Venencios") {
  console.log(`O nome deles são ${rodrigo} e ${vini}`);
} else {
  console.log("Não sabemos o nome deles");
}
