import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Cliente from "../modelos/cliente";

export default class Acomodacao {
    private nomeAcomadacao: NomeAcomadacao;
    private camaSolteiro: number;
    private camaCasal: number;
    private suite: number;
    private climatizacao: boolean;
    private garagem: number;
    private cliente: Cliente | null = null;

    constructor(nomeAcomadacao: NomeAcomadacao, camaSolteiro: number, camaCasal: number, suite: number, climatizacao: boolean, garagem: number) {
        this.nomeAcomadacao = nomeAcomadacao;
        this.camaSolteiro = camaSolteiro;
        this.camaCasal = camaCasal;
        this.suite = suite;
        this.climatizacao = climatizacao;
        this.garagem = garagem;
    }

    public get NomeAcomadacao() { return this.nomeAcomadacao; }
    public get CamaSolteiro() { return this.camaSolteiro; }
    public get CamaCasal() { return this.camaCasal; }
    public get Suite() { return this.suite; }
    public get Climatizacao() { return this.climatizacao; }
    public get Garagem() { return this.garagem; }
    public get Cliente() { return this.cliente; }
    public set Cliente(cliente: Cliente | null) { this.cliente = cliente; }

    public get Ocupada(): boolean {
        return this.cliente !== null;
    }
}