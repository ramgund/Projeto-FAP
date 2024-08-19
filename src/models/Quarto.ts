import { Hospedes } from "./Hospedes";
const rl = require("readline-sync");

class Quarto {
  private numero: number;
  private tipoQuarto: string;
  private tarifaDiaria: number;
  private quartos: Quarto[];

  constructor() {}

  setNumero(numero: number) {
    this.numero = numero;
  }

  getNumero() {
    return this.numero;
  }

  setTipoQuarto(tipoQuarto: string) {
    this.tipoQuarto = tipoQuarto;
  }

  getTipoQuarto() {
    return this.tipoQuarto;
  }

  setTarifaDiaria(tarifaDiaria: GLfloat) {
    this.tarifaDiaria = tarifaDiaria;
  }

  getTarifaDiaria() {
    return this.tarifaDiaria;
  }

  public cadastrarQuarto(): void {
    try {
      const tipoQuarto: string = rl
        .question("Digite o tipo de quarto(solteiro, duplo, suite): ")
        .toLowerCase();
      const tarifaDiaria: number = parseFloat(
        rl.question("Digite a tarifa diaria: ")
      );

      const novoQuarto: Quarto = new Quarto();

      novoQuarto.setTipoQuarto(tipoQuarto);
      novoQuarto.setTarifaDiaria(tarifaDiaria);
      novoQuarto.setNumero(
        this.quartos.length > 0
          ? this.quartos[this.quartos.length - 1].numero + 1
          : 1
      );

      this.quartos.push(novoQuarto);
      console.log("Cadastrado com sucesso.");
    } catch (error) {
      console.error("Erro ao cadastrar quarto");
    }
  }

  public procurarNumero(numero: number): Quarto | undefined {
    return this.quartos.find((q) => q.getNumero() == numero);
  }
}

export { Quarto };
