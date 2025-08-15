"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const p = new Personagem_1.Personagem();
p.nome = "Edécio";
p.classe = "Monge";
p.raca = "Undead";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;
console.table(p);
//# sourceMappingURL=Main.js.map