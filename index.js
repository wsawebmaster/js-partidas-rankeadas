let vitorias = 111;
let derrotas = 10;
let saldoVitorias = vitorias - derrotas;
let nivel = "";

function rankear() {
  switch (true) {
    case saldoVitorias <= 10:
      nivel = "Ferro";
      break;
    case saldoVitorias <= 20:
      nivel = "Bronze";
      break;
    case saldoVitorias <= 50:
      nivel = "Prata";
      break;
    case saldoVitorias <= 80:
      nivel = "Ouro";
      break;
    case saldoVitorias <= 90:
      nivel = "Diamante";
      break;
    case saldoVitorias <= 100:
      nivel = "Lendário";
      break;
    default:
      nivel = "Imortal";
  }
}

rankear();
console.log(
  `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
);
