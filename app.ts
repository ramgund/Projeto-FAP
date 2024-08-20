const rl = require("readline-sync");
import { Hospedes } from "./src/models/Hospedes";
import { Quarto } from "./src/models/Quarto";
import { Reserva } from "./src/models/Reserva";
import {
  cadastroResposta,
  menu,
  opcaoDeletar,
  opcaoListar,
  respostaMenu,
  opcaoAtualizar,
} from "./src/Functions/functions";

const hospede: Hospedes = new Hospedes();
const reserva: Reserva = new Reserva();
const quarto: Quarto = new Quarto();

while (respostaMenu !== 5) {
  menu();
  switch (respostaMenu) {
    case 1:
      if (cadastroResposta == 1) {
        reserva.cadastrarReserva(hospede, quarto);
        console.log("Reserva cadastrada com sucesso.");
        menu();
      } else if (cadastroResposta == 2) {
        hospede.cadastrarHospede();
        console.log("Hospede cadastrado com sucesso.");
        menu();
      }
      break;

    case 2:
      if (opcaoAtualizar == 1) {
        hospede.atualizarHospede();
        menu();
      } else if (opcaoAtualizar == 2) {
        reserva.atualizarReserva();
        menu();
      } else if (opcaoAtualizar == 3) {
        quarto.atualizarQuarto();
        menu();
      }
      break;

    case 3:
      if (opcaoDeletar == 1) {
        hospede.deletarHospede();
        menu();
      } else if (opcaoDeletar == 2) {
        reserva.deletarReserva();
        menu();
      } else if (opcaoDeletar == 3) {
        quarto.deletarQuarto();
        menu();
      }
      break;

    case 4:
      if (opcaoListar == 1) {
        hospede.mostrarHospedes();
        menu();
      } else if (opcaoListar == 2) {
        quarto.mostrarQuartos();
        menu();
      } else if (opcaoListar == 3) {
        reserva.mostrarReservas();
        menu();
      }
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}

export { hospede };
