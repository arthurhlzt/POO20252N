import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util {

    static gerarNumeroAleatorio(minimo: number, maximo:number) : number {
      return minimo + Math.round (Math.random() * (maximo - minimo))
    }

    static gerarNome(): string {
        const randomName = faker.person.firstName();
        return randomName;
    }

    static gerarEmail(nomeDoUsuario: string){
        return faker.internet.email({ firstName: nomeDoUsuario });
    }

    static subirNivel(nivelAtual:number, novoNivel: number):number { 
        return novoNivel + (Math.random() * (novoNivel - nivelAtual))
}
    static gerarNovaArma(): string {
        const armas: string[] = ["Espada", "Machado", "Arco e Flecha", "Cajado", "Adaga", "Martelo", "Lança", "Foice"];
        const indiceAleatorio = Math.floor(Math.random() * armas.length);
        return armas[indiceAleatorio]!;
    }
    static lancarFeiticoAleatorio(manaAtual: number, custoMana: number): boolean {
        const feiticos: string[] = ["Bola de Fogo", "Raio", "Cura", "Escudo Mágico", "Teletransporte"];
        if (manaAtual >= custoMana) {
        manaAtual -= custoMana;
        const indiceAleatorio = Math.floor(Math.random() * feiticos.length);
        console.log(`Feitiço lançado: ${feiticos[indiceAleatorio]}`);
        return true;
    }
    return false;
}
}
for(let index = 0; index < 10; index++){
    const nome = Util.gerarNome()
    const email = Util.gerarEmail(nome)
}

