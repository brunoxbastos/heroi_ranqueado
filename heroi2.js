// Função para calcular o saldo de vitórias e determinar o rank
function ranked(nVictory, nDefeated) {
  let saldo = nVictory - nDefeated; // O saldo continua sendo calculado corretamente
  let rank;

  // As condições de ranqueamento agora usam nVictory (número de vitórias)
  if (nVictory < 10) {
    rank = "Ferro";
  } else if (nVictory >= 11 && nVictory <= 20) {
    rank = "Bronze";
  } else if (nVictory >= 21 && nVictory <= 50) {
    rank = "Prata";
  } else if (nVictory >= 51 && nVictory <= 80) {
    rank = "Ouro";
  } else if (nVictory >= 81 && nVictory <= 90) {
    rank = "Diamante";
  } else if (nVictory >= 91 && nVictory <= 100) {
    rank = "Lendário";
  } else { // nVictory maior ou igual a 101
    rank = "Imortal";
  }

  // Retorna um objeto com o saldo e o rank. [1], [4], [12], [14], [15]
  return { saldo: saldo, rank: rank };
}

// --- Dados do herói (exemplo) ---
let heroi = "PigHero";
let xp = 2467;
let vitorias = 85; // Alterado para um exemplo que caia em "Diamante" pelo número de vitórias
let derrotas = 10;

// --- Definindo nível por XP ---
let nivel = "";
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else { // xp maior que 10000
  nivel = "Radiante";
}

// --- Calculando saldo e rank usando a função melhorada ---
let resultadoRanked = ranked(vitorias, derrotas);

// --- Console final unificado ---
// Utiliza template literals para uma saída formatada e legível. [2], [3], [5], [6], [10]
console.log(
  `O Herói de nome ${heroi}, com XP de ${xp} está no nível de ${nivel}, possui um saldo de ${resultadoRanked.saldo} vitórias e está ranqueado como ${resultadoRanked.rank}.`
);

