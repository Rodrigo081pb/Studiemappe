class ItemMagico {
  constructor(nome, tipo, dano, resistencia) {
    this.nome = nome;
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  calcularDano() {
    return this.tipo === "arma" ? this.dano * 2 : this.dano;
  }
}

const espadaMagica = new ItemMagico("Espada Mágica", "arma", 50, 0);
const cajadoMagico = new ItemMagico("Cajado Mágico", "cajado", 40, 10);
const machadoMagico = new ItemMagico("Machado Mágico", "arma", 60, 5);
const varinhaMagica = new ItemMagico("Varinha Mágica", "varinha", 30, 15);

class Jogador {
  constructor(nome, vida, item) {
    this.nome = nome;
    this.vida = vida;
    this.item = item;
  }

  receberDano(dano) {
    this.vida -= dano;
    if (this.vida < 0) {
      this.vida = 0;
    }
  }

  curar(quantidade) {
    this.vida += quantidade;
    console.log(`${this.nome} foi curado em ${quantidade} pontos de vida.`);
  }

  atacar(outroJogador) {
    const danoCausado = this.item.calcularDano();
    outroJogador.receberDano(danoCausado);
    console.log(
      `${this.nome} ataca ${outroJogador.nome} causando ${danoCausado} de dano.`
    );
  }
}

function simularBatalha(jogador1, jogador2) {
  console.log(`Começa a batalha entre ${jogador1.nome} e ${jogador2.nome}`);
  let rodada = 1;
  while (jogador1.vida > 0 && jogador2.vida > 0) {
    console.log(`Rodada ${rodada}:`);
    jogador1.atacar(jogador2);
    if (jogador2.vida > 0) {
      jogador2.atacar(jogador1);
    }
    console.log(`${jogador1.nome} tem ${jogador1.vida} de vida.`);
    console.log(`${jogador2.nome} tem ${jogador2.vida} de vida.`);
    if (rodada % 3 === 0) {
      jogador1.curar(20);
      jogador2.curar(20);
    }
    if (jogador1.vida < 10) {
      console.log(`${jogador1.nome} está muito ferido e foge da batalha!`);
      break;
    }
    if (jogador2.vida < 10) {
      console.log(`${jogador2.nome} está muito ferido e foge da batalha!`);
      break;
    }
    rodada++;
  }
  if (jogador1.vida === 0 && jogador2.vida === 0) {
    console.log("A batalha termina em empate!");
  } else if (jogador1.vida === 0) {
    console.log(`${jogador2.nome} vence a batalha!`);
  } else {
    console.log(`${jogador1.nome} vence a batalha!`);
  }
}

function simularGuerra(jogadores) {
  console.log("Começa a guerra mágica!");
  for (let i = 0; i < jogadores.length - 1; i++) {
    for (let j = i + 1; j < jogadores.length; j++) {
      console.log(`-----------------------------------------`);
      simularBatalha(jogadores[i], jogadores[j]);
      console.log(`-----------------------------------------`);
    }
  }
}

const jogador1 = new Jogador("Gandalf", 100, espadaMagica);
const jogador2 = new Jogador("Sauron", 120, cajadoMagico);
const jogador3 = new Jogador("Merlin", 110, machadoMagico);
const jogador4 = new Jogador("Morgana", 90, varinhaMagica);

const cajadoDasTrevas = new ItemMagico("Cajado das Trevas", "cajado", 80, 15);
const espadaCelestial = new ItemMagico("Espada Celestial", "arma", 90, 20);
const poçãoCurativa = new ItemMagico("Poção Curativa", "poção", 0, 0);

const jogador5 = new Jogador("Dumbledore", 150, cajadoDasTrevas);
const jogador6 = new Jogador("Voldemort", 200, espadaCelestial);
const jogador7 = new Jogador("Harry Potter", 120, poçãoCurativa);

const todosJogadores = [
  jogador1,
  jogador2,
  jogador3,
  jogador4,
  jogador5,
  jogador6,
  jogador7,
];

simularGuerra(todosJogadores);
