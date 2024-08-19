import { Hospedes } from "./Hospedes";
import { Quarto } from "./Quarto";
import { menu } from "../Functions/functions";
const rl = require("readline-sync");

class Reserva {
  private dataInicio: Date;
  private dataTermino: Date;
  private hospede: Hospedes;
  private quarto: Quarto;
  private reservas: Reserva[] = [];

  constructor() {}

  setdataIncio(dataInicio: Date) {
    this.dataInicio = dataInicio;
  }

  getDataIncio() {
    return this.dataInicio;
  }

  setDataTermino(dataTermino: Date) {
    this.dataTermino = dataTermino;
  }

  getDataTermino() {
    return this.dataTermino;
  }

  public cadastrarReserva(hospede: Hospedes, quarto: Quarto): void {
    try {
      const dataIstr: string = rl.question("Digite a data de inicio: ");
      const dataFstr: string = rl.question("Digite a data de termino: ");
      const dataI: Date = new Date(dataIstr);
      const dataF: Date = new Date(dataFstr);
      const hospedeCadastrado: string = rl
        .question("Hospede cadastrado?(s/n)")
        .toLowerCase();

      if (hospedeCadastrado == "s") {
        const idHospede = parseInt(rl.question("Digite o id do hospede: "));
        const hospedeEncontrado: Hospedes | undefined =
          hospede.procurarHospede(idHospede);

        if (!hospedeEncontrado) {
          console.log("Hospede não encontrado. Cadastrando novo hospede.");
          hospede.cadastrarHospede();
          console.log("Voltando ao menu.");
          menu();
        } else {
          const numeroQuarto: number = parseInt(
            rl.question("Digite o numero do quarto: ")
          );
          const quartoEncontrado: Quarto | undefined =
            quarto.procurarNumero(numeroQuarto);
          if (!quartoEncontrado) {
            throw new Error("Quarto não encontrado.");
          }
          const novaReserva: Reserva = new Reserva();
          novaReserva.setdataIncio(dataI);
          novaReserva.setDataTermino(dataF);
          novaReserva.hospede = hospedeEncontrado;
          novaReserva.quarto = quartoEncontrado;
          this.reservas.push(novaReserva);
          console.log("Reserva cadastrada com sucesso.");
        }
      } else {
        hospede.cadastrarHospede();
      }
    } catch (error) {
      console.error("Erro ao cadastrar reserva.", error.message);
    }
  }
}

export { Reserva };
