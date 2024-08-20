const rl = require("readline-sync");
import { Hospedes } from "./src/models/Hospedes";
import { Quarto } from "./src/models/Quarto";
import { Reserva } from "./src/models/Reserva";
import {
  cadastroOpcoes,
  menu,
  deletarOpcoes,
  listarOpcoes,
  atualizarOpcoes,
} from "./src/Functions/functions";

const hospede: Hospedes = new Hospedes();
const reserva: Reserva = new Reserva();
const quarto: Quarto = new Quarto();

let respostaMenu: number = menu();

while (respostaMenu !== 5) {
  switch (respostaMenu) {
    case 1:
      const cadastroResposta = cadastroOpcoes();
      if (cadastroResposta === 1) {
        reserva.cadastrarReserva(hospede, quarto);
        console.log("Reserva cadastrada com sucesso.");
      } else if (cadastroResposta === 2) {
        hospede.cadastrarHospede();
        console.log("Hóspede cadastrado com sucesso.");
      } else if (cadastroResposta === 3) {
        quarto.cadastrarQuarto();
        console.log("Quarto cadastrado com sucesso!");
      }
      break;

    case 2:
      const opcaoAtualizar = atualizarOpcoes();
      if (opcaoAtualizar === 1) {
        hospede.atualizarHospede();
      } else if (opcaoAtualizar === 2) {
        reserva.atualizarReserva();
      } else if (opcaoAtualizar === 3) {
        quarto.atualizarQuarto();
      }
      break;

    case 3:
      const opcaoDeletar = deletarOpcoes();
      if (opcaoDeletar === 1) {
        hospede.deletarHospede();
      } else if (opcaoDeletar === 2) {
        reserva.deletarReserva();
      } else if (opcaoDeletar === 3) {
        quarto.deletarQuarto();
      }
      break;

    case 4:
      const opcaoListar = listarOpcoes();
      if (opcaoListar === 1) {
        hospede.mostrarHospedes();
      } else if (opcaoListar === 2) {
        quarto.mostrarQuartos();
      } else if (opcaoListar === 3) {
        reserva.mostrarReservas();
      }
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }

  respostaMenu = menu();
}

console.log("Saindo...");
export { hospede };
