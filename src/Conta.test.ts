import { describe, expect, it } from "@jest/globals";
import { Conta } from "./Conta";

/*
DEPÓSITO
✅- Não pode depositar valores negativos
- Se depositar zero, saldo não pode mudar
✅- Se depositar positivo, deve somar ao saldo

SAQUE
✅- Não pode sacar valores negativos
- Se sacar zero, saldo não pode mudar
- Se sacar positivo, deve diminuir do saldo
- Não pode sacar mais do que tem na conta (saldo não pode ficar negativo)
*/
describe("Quando depositar", () => {
    it("Deve aceitar depósitos de um valor positivo", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 0;

        //Execução
        conta.depositar(100);

        //Validação
        expect(conta.saldo).toBe(100);
    })

    it("Não deve ser possível depositar valores negativos", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 100;

        //Execução
        conta.depositar(-50);

        //Validação
        expect(conta.saldo).toBe(100);
    })
})


describe("Quando sacar", () => {
    it("Não deve sacar valores negativos", () => {
        const conta: Conta = new Conta();
        conta.saldo = 100;

        expect(() => { conta.sacar(-50) }).toThrow("inválido");

        // conta.sacar(-50);

        // expect(conta.saldo).toBe(100);

    })
})