"use strict"

function climbingLeaderboard(ranked, player) {
    const result = [];

    // Remove duplicatas da lista ranked
    const uniqueRanked = [];
    for (let index = 1; index < ranked.length; index++) {
        if (ranked[index] !== ranked[index - 1]) {
            uniqueRanked.push(ranked[index-1]);
        }
        if (index === ranked.length-1) {
            uniqueRanked.push(ranked[index]);
        }
    }

    console.log("🏆 Ranking original:", ranked);
    console.log("🏆 Ranking sem duplicatas:", uniqueRanked);
    console.log("🎮 Pontuações do jogador:", player);
    console.log("-----------------------------------------");

    // Para cada pontuação do jogador
    for (let i = 0; i < player.length; i++) {
        let score = player[i];
        let position = 1;

        console.log(`🎯 Verificando score ${score} do jogador...`);

        // Enquanto o score do jogador for menor que o do ranking atual
        while (position <= uniqueRanked.length && score < uniqueRanked[position - 1]) {
            console.log(`➡️  ${score} < ${uniqueRanked[position - 1]} → posição atual: ${position + 1}`);
            position++;
        }

        console.log(`✅ ${score} fica na posição ${position}`);
        console.log("-----------------------------------------");

        result.push(position);
    }

    return result;
}

function main() {
    const ranked = [100, 90, 90, 80];   // [1, 2, 2, 3, 4, 5, 5]
    const player = [70, 80, 105];

    console.log(climbingLeaderboard(ranked, player));
}

main();