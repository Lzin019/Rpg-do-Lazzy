let ouro = 1000;
let valorEspada = 50;
console.log("Saldo inicial", ouro);
let xp = 10;

//quero que Lazzy compre uma espada (que custa valorEspada), e  preciso verificar se ele tem ouro suficiente. ao comprar irei atualizar o ouro

if (ouro >= valorEspada && xp >= 80) {
    console.log("Obaa espada comprada com sucesso.");
    ouro -= valorEspada;
    console.log("Saldo final", ouro);
} else if (ouro >= valorEspada && xp <= 50) {
console.log("Você pode ter dinheiro, mas ainda não tem xp suficinet paraa compra")
}
else {
    let diferenca = valorEspada - ouro;
console.log(`Oi pobrinho, faltam ${diferenca} moedas de ouro para você comprar sua espada`);
}
