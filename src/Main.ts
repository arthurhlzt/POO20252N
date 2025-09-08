import { Personagem } from "./Personagem";
import Prompt from "prompt-sync";

const teclado = Prompt();

const p: Personagem = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Undead";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;



while(true){

console.log("+------------MENU---------------+");
console.log("| 1 - Subir Nivel               |");
console.log("| 2 - Treinar Poder de Ataque   |");
console.log("| 3 - Checar se personagem vive |");
console.log("| 4 - Regenerar mana            |");
console.log("| 5 - Equipar arma              |");
console.log("| 6 - Lançar Feitiço            |");
console.log("| 8 - Ver Status                |");
console.log("| 9 - Sair                      |");
console.log("+-------------------------------+");

const escolha: number = +teclado("Escolha uma opção do menu: ");

if(escolha === 9){
    break;
}
switch (escolha) {
    case 1:
        p.nivel += 1;
        console.log(`O personagem ${p.nome} subiu para o nível ${p.nivel}`);
        break;

    case 2:
        treinarPoderAtaque(p);
        break;

        case 3:
            console.log(p.estaVivo()? "Personagem está vivo!" : "Personagem está morto!")
            if(p.estaVivo()){
                console.log("Personagem está vivo!");
            } else {
                console.log("Personagem está morto!");
            } 
            break;

        case 4:
            p.regenerarMana();
            console.log(`O personagem ${p.nome} regenerou mana. Mana atual: ${p.manaAtual}/${p.manaMaxima}`);
            break;

        case 5:
            p.novaArma();
            console.log(`O personagem ${p.nome} equipou uma nova arma: ${p.arma}`);
            break;

        case 6:
            const custoMana: number = 20;
            const feiticos: string[] = ["Bola de Fogo", "Raio", "Cura", "Escudo Mágico", "Teletransporte"];
            const lancarFeitico = p.lancarFeitico(custoMana);
            if (lancarFeitico) {
                p.manaAtual -= custoMana;
                console.log(`Feitiço lançado! Mana restante: ${p.manaAtual}/${p.manaMaxima}`);
            } else {
                console.log("Mana insuficiente para lançar o feitiço.");
            }
            break;

        case 8:
            console.table(p);
            break;

            default:
        console.log("Opção inválida!");
        break;
    }
}


console.table(p);

function treinarPoderAtaque(person: Personagem): void {
    person.treinarPoderAtaque();
}