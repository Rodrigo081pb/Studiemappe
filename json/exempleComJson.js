// Tudo que estiver entre chaves eu posso declarar no json
let invoice = {
  nome: "rodrigo",
  age: 25,
  products: {
    0: ["mouse pad IDE", 29.91],
    1: ["Teclado mecanico", 30.91],
    2: ["monitor", 900.01],
  },
};

generateInvoice(invoice);

function generateInvoice(invoice) {
  console.log(`O comprador é ${invoice.nome}`);
  console.log(`Sua idade é de ${invoice.age}`);
  console.log("----------------------------");

  for (const index in invoice.products) {
    let [productName, productPrice] = invoice.products[index];
    console.log(`${productName} ${productPrice});`);
  }
}

// Pegando todo o elemento e aquivo
console.log(invoice);

// Pegando o que está dentro do products
console.log(invoice.products);
