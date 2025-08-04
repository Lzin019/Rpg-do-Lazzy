
let nome = "Lazzy";
let classe = "Necromante";
let dano = 1500
let nivel = 84;
let vida = 100;
let moedas = 500;
let xp = 0;

console.log("Início da Jornada de " + nome);
console.log(`Olá, Bem-Vindo a minha jornada eu me chamo ${nome}🧛‍♂️, minha classe é ${classe}🧟‍♂️ e estou no nível ${nivel}, possuo ${vida} de vida, atualemnte tenho ${moedas} moedas e estou com ${xp} de xp`);

console.log("--------------------");


const NOMEARMA = "Cajado Negro";
const DANOBASE = 150;
const NOMEARMADURA = "Corpo de Ossos";
const DEFESABASE = 20;

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

let defesaTotal = DEFESABASE + (nivel / 2);
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

podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);
console.log("lazzy consegue enfrentar o gaurdião?🎇", podeEnfrentarGuardiao);

console.log("--------------------------------------");

console.log("Final da Jornada de " + nome);
console.log(`Nivel🔼: ${nivel}, XP✨: ${xp}, Moedas💸: ${moedas}, Vida❤: ${vida} Dano Atual: ${dano}`);

console.log("---------------------------------------------------------------------");

console.log("🧾 LORE De: Lazzy");
console.log("");
console.log("Lazzy, o nobre ncromante, explora dungeons no incrivel mundo de worldsistem.");
console.log("Portando o seu cajado negro, ressuscita mortos de volta a vida para lutar ao seu lado");
console.log("Com nível 84 já possui um grande ataque de 3000 de dano, todos de worldsistem o temem.");
console.log("Sua incrivel defesa de 77 pontos de resistência quase o torna invencivel.");
console.log("Após seu treinamento na masmorra bug ele ganha 150 pontos de xp");
console.log("Logo depois do treinamento Lazzy toma uma poção de regeneração de vida de 40 pontos de saúde");
console.log("Vida suficiente? true | Ataque forte o suficente? true | Nível avançado para derrotar o boss? true");
console.log("Pode enfrentar o Guardião? true — o grande final do monstro está se aproximando, pois Lazzy é imparavel.😈");