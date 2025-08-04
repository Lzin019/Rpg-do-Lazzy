let nome = "Lazzy";
let classe = "Necromante";
let dano = 1500
let nivel = 84;
let energia = 200;
let vida = 100;
let moedas = 500;
let xp = 0;

console.log("Início da Jornada de " + nome);
console.log(`Olá, Bem-Vindo a minha jornada eu me chamo ${nome}🧛‍♂️, minha classe é ${classe}🧟‍♂️ e estou no nível ${nivel}, possuo ${vida} de vida, atualemnte tenho ${moedas} moedas e estou com ${xp} de xp`);

console.log("--------------------");


const NOMEARMA = "Cajado Negro";
const DANOBASE = 150;
const NOMEARMADURA = "Corpo de Ossos"
const DEFESABASE = 20 

console.log("Dados do personagem:");
console.log(`🔪Arma: ${NOMEARMA}`);
console.log(`💥Dano base: ${DANOBASE}`);
console.log(`👔Nome a Armadura: ${NOMEARMADURA}`);
console.log(`🛡Defesa Base: ${DEFESABASE}`); 

console.log("--------------------");
xp += 150;  //treinamento
moedas -= 30; // comprou uma poção
vida += 40; // usou a poção e recuperou 40 de hp
dano *= 2; // encantou a arma e dobrou a força
nivel += 30;  //derrotou um boss rank B

let ataqueTotal = nivel + DANOBASE
console.log("Força total:", ataqueTotal);

let defesaTotal = DEFESABASE + (nivel / 2)
console.log("Defesa total:", defesaTotal);
console.log("--------------------");

console.log("🔐 Avaliações");

let vidaSuficiente = vida > 70
console.log("❤ A vida é suficiente? ❤", vidaSuficiente);

console.log("--------------------------------------");

ataqueForte = ataqueTotal > 60
console.log("⚔ O ataque é forte o suficiente? ⚔", ataqueForte);

console.log("--------------------------------------");

nivelAvancado = nivel >= 10
console.log("✨ O nivel de lazzy é avançado?✨", nivelAvancado);

console.log("--------------------------------------");

podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)
console.log("lazzy consegue enfrentar o gaurdião?🎇", podeEnfrentarGuardiao);

console.log("--------------------------------------");

console.log("Final da Jornada de " + nome);
console.log(`Nivel🔼: ${nivel}, XP✨: ${xp}, Moedas💸: ${moedas}, Vida❤: ${vida} Dano Atual: ${dano}`);

console.log("---------------------------------------------------------------------");

console.log("🧾 LORE De: Lazzy");
console.log("");
console.log("Lazzy, o nobre necromante, explora dungeons no incrivel mundo de worldsistem.");
console.log("Portando o seu cajado negro, ressuscita mortos de volta a vida para lutar ao seu lado");
console.log("Com nível 114 já possui um grande ataque de 3000 de dano, todos de worldsistem o temem.");
console.log("Sua incrivel defesa de 77 pontos de resistência quase o torna invencivel.");
console.log("Após seu treinamento na masmorra bug ele ganha 150 pontos de xp");
console.log("Logo depois do treinamento Lazzy toma uma poção de regeneração de vida de 40 pontos de saúde");
console.log("Vida suficiente? true | Ataque forte o suficente? true | Nível avançado para derrotar o boss? true");
console.log("Pode enfrentar o Guardião? true — o grande final do monstro está se aproximando, pois Lazzy é imparavel.😈");

console.log("");
console.log("CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1,");
console.log("Após a sua chegada ao templo do monstro, lazzy se prepara para a grande batalha épica");
console.log("Todos os seus atributos estão compativeis para enfrentar o monstro como será que ira acontecer essa batalha?");
console.log("");

// Novos atributos para batalha
let forca = dano;
let vidaAtual = vida;
let energiaAtual = energia;
let defesa = 77;
let agilidade = 120;
let combatesVencidos = 1;

// Estado atual da história:
//local atual= "-worldsistem, no templo do monstro guardião ";
//missão atual"-A batalha contra o guardião";

console.log("Capítulo 1: A batalha contra o guardião do templo");
console.log("");
let poderInimigo = 300;

 //condicional simples 1/3
if (vidaAtual >= 100 && energiaAtual >= 100) {
    console.log("Lazzy parte para cima do monstro!!");
}

console.log("------------------------------------------------");
console.log("-Após o ataque de lazzy o monstro desperta e parte para cima!!😱😱");
console.log("------------------------------------------------");


//Condicionais Compostas 2/3
if (agilidade >= 120) { 
    console.log("🍃 Com agilidade suficiente, " + nome + " desvia do ataque do monstro e revida!");
    agilidade -= 30;
    console.log("Agilidade restante: " + agilidade);
} 

console.log("");
console.log("Lazzy então sem escolha decide liberar todo seu poder e ir para cima do monstro, mas antes checa sua energia");
console.log("");

//Condicionais Compostas 3/3
if (energiaAtual >= 90) { 
    console.log("🍃 Com todo seu poder restante, " + nome + " decide usar seu ataque secreto e derrota o monstro.😮");
    agilidade -= 90;
} 

xp += 2000;  
moedas += 3000; 
vida += 200; 
dano *= 3; 
nivel ++;  

console.log(`-Após a batalha, Lazzy ficou no nível ${nivel} com ${moedas} moedas e com outros atributos melhorados.🔥🔥`);


console.log("Capítulo 2: O descanso de Lazzy 🛏️ ");
console.log("");
console.log("-Após errotar o boss, Lazzy se sente na obrigação de aprimorar a si mesmo");
console.log("-Lazzy avista um vilarejo próximo e decide ir até lá para descansar");
console.log("-Chegando la ele avista um multidão em volta do que pareia uma rocha");
console.log("-Ele decide perguntar a uma jovem que estava por perto o que havia acontecido");
console.log("-Então ela responde que um cavalheiro do reino bug infincou uma espada sagrada na rocha a onde passava a água do vilarejo");
console.log("-E isso fazia com que não tivesse água para os cidadões");
console.log("-Lazzy como um bom homem de coração puro decide ajudar");
console.log("-Vários homens do vilarejo avisaram há ele para não tentar pois não haviam conseguido tirar a espada nem mesmo com 30 homens puxando-a");

console.log("");

//Condicionais Compostas 1/2
console.log("Lazzy se aproxima da espada e tenta puxala");
if (forca >= 100) {
    console.log("👍🔥 " + nome+ " puxa a espada com facilidade e todos ficam em choque total se perguntando quem seria aquele homem");
} else {
    console.log("❌ " + nome+ " não consegue puxar a espada e apenas passa vergonha se cagando de tanta força que fez...");
}
console.log("");
console.log("-Lazzy acha estranhamento fácil e fica se perguntanto o quão forte ele se tornou");
console.log("-Mas não suficiente ele ainda quer mais poder");
console.log("-As pessoas do vilarejo o agardecem e o presenteam com muita comida");
console.log("-Lazzy come tudo pois estava com muita fome e decide ir embora do vilarejo");
console.log("-Então o rei dos bugs após saber do ato de Lazzy manda seus subordinados atrás dele");
console.log("-Lazzy na floresta após sair do vilarejo é cercado pelos bugs, que ao verem partem para cima!");
console.log("");

//Condicionais Compostas 2/2
console.log("Lazzy pensa rápido e tenta desviar");
if (energia >= 100) {
    console.log("😮" + nome+ " desvia e acaba com os bugs em um piscar de olhos 👀");
} else {
    console.log("❌" + nome+ "não consegue desviar e acab sendo esfaqueado com uma faca de magia sangrenta");
}

console.log("Capítulo 3: ");