import { Hospedes } from "./Hospedes";
import { menu } from "../Functions/functions";
const rl = require("readline-sync");

class Quarto {
  private numero!: number;
  private tipoQuarto!: string;
  private tarifaDiaria!: number;
  private quartos: Quarto[] = [];

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

  setTarifaDiaria(tarifaDiaria: number) {
    this.tarifaDiaria = tarifaDiaria;
  }

  getTarifaDiaria() {
    return this.tarifaDiaria;
  }

  public cadastrarQuarto(): void {
    try {
      const tipoQuarto: string = rl
        .question("Digite o tipo de quarto (solteiro, duplo, suite): ")
        .toLowerCase();
      const novoQuarto: Quarto = new Quarto();

      if (["solteiro", "duplo", "suite"].includes(tipoQuarto)) {
        if (tipoQuarto == "solteiro") {
          novoQuarto.setTarifaDiaria(50);
        } else if (tipoQuarto == "duplo") {
          novoQuarto.setTarifaDiaria(100);
        } else if (tipoQuarto == "suite") {
          novoQuarto.setTarifaDiaria(200);
        }

        novoQuarto.setTipoQuarto(tipoQuarto);
        novoQuarto.setNumero(
          this.quartos.length > 0
            ? this.quartos[this.quartos.length - 1].getNumero() + 1
            : 1
        );

        this.quartos.push(novoQuarto);
        console.log("Quarto cadastrado com sucesso.");
      } else {
        throw new Error("Tipo de quarto inválido.");
      }
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao cadastrar quarto:", err.message);
    }
  }

  public procurarNumero(numero: number): Quarto | undefined {
    return this.quartos.find((q) => q.getNumero() === numero);
  }

  public deletarQuarto(): void {
    try {
      const numeroQuarto: number = parseInt(
        rl.question("Digite o número do quarto que deseja deletar: ")
      );
      const quartoExiste: Quarto | undefined =
        this.procurarNumero(numeroQuarto);

      if (!quartoExiste) {
        throw new Error("Quarto não existe.");
      } else {
        const procurarIndex: number = this.getIndexQuarto(numeroQuarto);

        if (procurarIndex !== -1) {
          this.quartos.splice(procurarIndex, 1);
          console.log("Quarto deletado com sucesso.");
        }
      }
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao deletar quarto:", err.message);
    }
  }

  public atualizarQuarto(): void {
    try {
      const numeroQuarto: number = parseInt(
        rl.question("Digite o número do quarto: ")
      );
      const quartoExiste: Quarto | undefined =
        this.procurarNumero(numeroQuarto);

      if (!quartoExiste) {
        throw new Error("Erro ao atualizar o quarto: quarto não encontrado.");
      } else {
        const opcaoAlterar: number = parseInt(
          rl.question(
            "1 - Atualizar tipo\n2 - Atualizar tarifa\n3 - Voltar ao menu\nEscolha uma opção: "
          )
        );

        if (opcaoAlterar === 1) {
          const novoTipo: string = rl.question(
            "Digite o novo tipo do quarto: "
          );
          quartoExiste.setTipoQuarto(novoTipo);
        } else if (opcaoAlterar === 2) {
          const novaTarifa: number = parseInt(
            rl.question("Digite o novo valor da tarifa: ")
          );
          quartoExiste.setTarifaDiaria(novaTarifa);
        } else if (opcaoAlterar === 3) {
          menu();
        } else {
          throw new Error("Opção inválida.");
        }

        console.log("Quarto atualizado com sucesso.");
      }
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao atualizar quarto:", err.message);
    }
  }

  public getIndexQuarto(numero: number): number {
    return this.quartos.findIndex((q) => q.getNumero() === numero);
  }

  public mostrarQuartos(): void {
    this.quartos.forEach((quarto) => {
      console.log(
        `Número do quarto: ${quarto.getNumero()}\nTarifa: ${quarto.getTarifaDiaria()}\nTipo: ${quarto.getTipoQuarto()}`
      );
    });
  }
}

export { Quarto };
