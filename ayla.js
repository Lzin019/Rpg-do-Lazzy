//dados iniciais
let vida = 60;
let energia = 40;
let xp = 800;
let ouro = 200;
let nivel = 3;

//parte 1 - Estado de Saúde de Ayla
if (vida >= 80) {
    console.log("Ayla está em órima forma!");
} else if (vida >= 40) {
    console.log("Ayla está ferida, mas ainda consegue lutar.");
} else {
    console.log("Ayla está em estado crítico, recue!!");
}

//parte 2 - Missão

if (vida >= 50 && energia >= 50) {
    console.log("Ayla entra no calabouço");
} else {
    console.log("Ayla não pode entrar no calabouço");
}

//Parte 3 - Nível
if (xp >= 1000) {
    nivel++;
    console.log("Ayla subiu de nível");
} else {
    console.log("Adquira mais xp para subir de nível");
}

if (ouro >= 300){
    console.log("Ayla comrpou a armadura mágica");
} else {
    console.log("Ayla não tem ouro suficiente.");
}