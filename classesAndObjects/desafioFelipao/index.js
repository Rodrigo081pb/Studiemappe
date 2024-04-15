class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = this.definirAtaque();
  }

  definirAtaque() {
    if (this.tipo === "mago") {
      return "magia";
    } else if (this.tipo === "guerreiro") {
      return "espada";
    } else if (this.tipo === "monge") {
      return "artes marciais";
    } else if (this.tipo === "ninja") {
      return "shuriken";
    }
  }

  exibir() {
    console.log(`O ${this.name} ${this.tipo} atacou usando ${this.ataque}`);
  }
}

const hero = new Hero("Witther", 30, "mago");

meuHeroi1.exibir();
