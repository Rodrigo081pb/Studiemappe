        Operadores Lógicos


    Tipos de operadores lógicos

&& = server como se fosse um "e"

° por exemplo você é maior que 18 anos e menor que 1.70

utilizando o javascript :

if (idade > 18) && (altura < 1.70){
console.log(`Então você pode viajar comigo pois já possui ${idade} e tem altura de ${altura}`)
} else {
console.log(`Você não pode viajar comigo pois não tem os requisitos solicitados`)
}

---

    Operador lógico (ou) no javascript é ||

Ele pergunta ao usuário se ele quer isso ou aquilo exemplo :

if ((IdadeUsuario1 => IdadeUsuario2) || (IdadeUsuario1 <= IdadeUsuario2)) {
console.log("Eles possuem idades diferentes")
} else {
console.log("Eles possuem idades iguais)
}

---

    Operador lógico (negação) no javascript é (!)

Ele diz uma condição negativa por exemplo

if (!Cash1 <=Cash2){
console.log("O usuário 1 não tem o mesmo dinheiro que o usuário dois e sim menos que ele")
}
