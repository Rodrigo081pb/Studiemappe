class Bolo {
  constructor(sabor, recheio) {
    this.sabor = sabor;
    this.recheio = recheio;
  }

  escrever() {
    console.log(`Bolo de ${this.sabor} com recheio de ${this.recheio}`);
  }
}

let boloFesta = new Bolo("Macaxeira", "Recheio de manga");

boloFesta.escrever();
