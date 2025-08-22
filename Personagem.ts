export class Personagem{
    nome:string = "";
    classe:string = "";
    raca:string = "";
    nivel:number = 0;
    arma:string = "";
    manaAtual:number = 0;
    manaMaxima:number = 0;
    vidaAtual:number = 0;
    vidaMaxima:number = 0;
    poderAtaque:number = 0;


constructor(nome: string){
    this.nome = nome;
    this.classe = "";
    this.raca = "";
    this.nivel = 0;
    this.arma = "";
    this.manaAtual = 0;
    this.manaMaxima = 0;
    this.vidaAtual = 0;
    this.vidaMaxima = 0;
    this.poderAtaque = 0;
    }
treinarPoderAtaque(): void {
    this.poderAtaque += 3 + this.poderAtaque *1.1;
}
}