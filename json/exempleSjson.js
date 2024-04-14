let nome = "Rodrigo";
let age = 19;
let products = ["Teclado", "Monitor Razer", "MousePad indraWeb"];
let productsValues = [29.5, 100.99, 875.5];

generateInvoice(nome, age, products, productsValues);

function generateInvoice(nome, age, products, productsValues) {
  console.log("O comprador é " + nome);
  console.log("Sua idade é de " + age);
  console.log("----------------------------");
  console.log("Os produtos comprados: " + products[0]);
  console.log("O valor é " + productsValues[0]);
}
