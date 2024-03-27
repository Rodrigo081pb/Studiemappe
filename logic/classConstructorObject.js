class Pokemon {
  constructor(type, name, power) {
    this.type = type;
    this.name = name;
    this.power = power;
  }

  falar() {
    console.log(
      `Meu nome é ${this.name} e eu sou do tipo ${this.type} e meu golpe é ${this.power}`
    );
  }
}

function comparar(pokemon1, pokemon2) {
  if (pokemon1.power > pokemon2.power) {
    // Corrigido para usar pokemon1 e pokemon2
    console.log(
      `${pokemon1.name} é mais forte que ${pokemon2.name} pois o seu tipo é ${pokemon1.type} e sua força é de ${pokemon1.power} já a do ${pokemon2.name} é de ${pokemon2.power}`
    );
  } else if (pokemon1.power < pokemon2.power) {
    // Corrigido para usar pokemon1 e pokemon2
    console.log(
      `${pokemon2.name} é mais forte que ${pokemon1.name} pois o seu tipo é ${pokemon2.type} e sua força é de ${pokemon2.power} já a do ${pokemon1.name} é de ${pokemon1.power}`
    );
  } else {
    console.log(`${pokemon1.name} e ${pokemon2.name} têm o mesmo poder`);
  }
}

const piggeot = new Pokemon("Piggeot", "voador", 100); // Corrigido para usar "Pokemon" em vez de "pokemons"
const mewtwo = new Pokemon("Mewtwo", "Psique", 200); // Corrigido para usar "Pokemon" em vez de "pokemons"

comparar(piggeot, mewtwo);
