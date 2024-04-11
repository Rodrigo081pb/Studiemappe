function saldoFinal(vitoria, derrota) {
  const saldo = vitoria - derrota;
  return saldo;
}

function rankingNivel(saldo) {
  if (saldo <= 20) {
    return "Bronze";
  } else if (saldo >= 21 && saldo <= 50) {
    return "Prata";
  } else if (saldo >= 51 && saldo <= 80) {
    return "Ouro";
  } else if (saldo >= 81 && saldo <= 90) {
    return "Diamante";
  } else if (saldo >= 91 && saldo <= 100) {
    return "Lendário";
  } else if (saldo >= 101) {
    return "Imortal";
  }
}

const saldo = saldoFinal(100, 50);
const nivel = rankingNivel(saldo);
const mensagem = `O herói tem saldo ${saldo} e está no nível ${nivel}`;

console.log(mensagem);
