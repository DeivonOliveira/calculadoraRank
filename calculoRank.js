var vitoriasDoJogador = 95;
var derrotasDoJogador = 20;

function rank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;

    if (vitorias < 10) {
        return { saldo, categoria: "Ferro" };
    } else if (vitorias >= 11 && vitorias <= 20) {
        return { saldo, categoria: "Bronze" };
    } else if (vitorias >= 21 && vitorias <= 50) {
        return { saldo, categoria: "Prata" };
    } else if (vitorias >= 51 && vitorias <= 80) {
        return { saldo, categoria: "Ouro" };
    } else if (vitorias >= 81 && vitorias <= 90) {
        return { saldo, categoria: "Diamante" };
    } else if (vitorias >= 91 && vitorias <= 100) {
        return { saldo, categoria: "Lendário" };
    } else if (vitorias >= 101) {
        return { saldo, categoria: "Imortal" };
    } else {
        return { saldo, categoria: "N/A" };
    }
}

var resultadoRankeadas = rank(vitoriasDoJogador, derrotasDoJogador);

console.log('O jogador tem de saldo ' + resultadoRankeadas.saldo + ' e está no nível: ' + resultadoRankeadas.categoria);