import { Hospedes } from "./Hospedes";
import { Quarto } from "./Quarto";
import { menu } from "../Functions/functions";
const rl = require("readline-sync");

class Reserva {
  private id!: number;
  private dataInicio!: Date;
  private dataTermino!: Date;
  private hospede!: Hospedes;
  private quarto!: Quarto;
  private reservas: Reserva[] = [];

  constructor() {}

  setDataInicio(dataInicio: Date) {
    this.dataInicio = dataInicio;
  }

  getDataInicio() {
    return this.dataInicio;
  }

  setDataTermino(dataTermino: Date) {
    this.dataTermino = dataTermino;
  }

  getDataTermino() {
    return this.dataTermino;
  }

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  public cadastrarReserva(hospede: Hospedes, quarto: Quarto): void {
    try {
      const dataIstr: string = rl.question(
        "Digite a data de início (AAAA-MM-DD): "
      );
      const dataFstr: string = rl.question(
        "Digite a data de término (AAAA-MM-DD): "
      );
      const dataI: Date = new Date(dataIstr);
      const dataF: Date = new Date(dataFstr);
      const hospedeCadastrado: string = rl
        .question("Hóspede cadastrado? (s/n): ")
        .toLowerCase();

      if (hospedeCadastrado === "s") {
        const idHospede = parseInt(rl.question("Digite o ID do hóspede: "));
        const hospedeEncontrado: Hospedes | undefined =
          hospede.procurarHospede(idHospede);

        if (!hospedeEncontrado) {
          console.log("Hóspede não encontrado. Cadastrando novo hóspede.");
          hospede.cadastrarHospede();
          console.log("Voltando ao menu.");
          menu();
        } else {
          const numeroQuarto: number = parseInt(
            rl.question("Digite o número do quarto: ")
          );
          const quartoEncontrado: Quarto | undefined =
            quarto.procurarNumero(numeroQuarto);
          if (!quartoEncontrado) {
            throw new Error("Quarto não encontrado.");
          }
          const novaReserva: Reserva = new Reserva();
          novaReserva.setDataInicio(dataI);
          novaReserva.setDataTermino(dataF);
          novaReserva.hospede = hospedeEncontrado;
          novaReserva.quarto = quartoEncontrado;
          novaReserva.setId(
            this.reservas.length > 0
              ? this.reservas[this.reservas.length - 1].getId() + 1
              : 1
          );
          this.reservas.push(novaReserva);
          console.log("Reserva cadastrada com sucesso.");
        }
      } else {
        hospede.cadastrarHospede();
      }
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao cadastrar reserva.", err.message);
    }
  }

  public procurarReserva(id: number): Reserva | undefined {
    return this.reservas.find((r) => r.getId() === id);
  }

  public atualizarReserva(): void {
    try {
      const idReserva: number = parseInt(
        rl.question("Digite o ID da reserva: ")
      );
      const reservaExiste: Reserva | undefined =
        this.procurarReserva(idReserva);

      if (!reservaExiste) {
        throw new Error("Reserva não existe.");
      } else {
        const opcaoAtualizar: number = parseInt(
          rl.question(
            "1 - Atualizar data de início\n2 - Atualizar data de término\n3 - Voltar ao menu\nEscolha uma opção: "
          )
        );

        if (opcaoAtualizar === 1) {
          const novaDataIstr: string = rl.question(
            "Digite a nova data de início (AAAA-MM-DD): "
          );
          const converterDataI: Date = new Date(novaDataIstr);
          reservaExiste.setDataInicio(converterDataI);
        } else if (opcaoAtualizar === 2) {
          const novaDataFstr: string = rl.question(
            "Digite a nova data de término (AAAA-MM-DD): "
          );
          const converterDataF: Date = new Date(novaDataFstr);
          reservaExiste.setDataTermino(converterDataF);
        } else if (opcaoAtualizar === 3) {
          menu();
        } else {
          throw new Error("Opção inválida.");
        }

        console.log("Reserva atualizada com sucesso.");
      }
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao atualizar reserva:", err.message);
    }
  }

  public deletarReserva(): void {
    try {
      const idReserva: number = parseInt(
        rl.question("Digite o ID da reserva a ser deletada: ")
      );
      const reservaExiste: Reserva | undefined =
        this.procurarReserva(idReserva);

      if (!reservaExiste) {
        throw new Error("Reserva não existe.");
      } else {
        const findIndex: number = this.reservas.findIndex(
          (r) => r.getId() === idReserva
        );

        if (findIndex !== -1) {
          this.reservas.splice(findIndex, 1);
          console.log("Reserva deletada com sucesso.");
        }
      }
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao deletar reserva:", err.message);
    }
  }

  public mostrarReservas() {
    this.reservas.forEach((reserva) => {
      console.log(
        `ID da Reserva: ${reserva.getId()}\nData início: ${reserva.getDataInicio()}\nData de término: ${reserva.getDataTermino()}\nHóspede: ${reserva.hospede.getNome()}\nQuarto: ${reserva.quarto.getNumero()}\n`
      );
    });
  }
}

export { Reserva };
