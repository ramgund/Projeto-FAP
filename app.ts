const rl = require("readline-sync");
import { Hospedes } from "./src/models/Hospedes";
import { Quarto } from "./src/models/Quarto";
import { Reserva } from "./src/models/Reserva";
import {
  atualizarOpcoes,
  cadastroOpcoes,
  deletarOpcoes,
  listarOpcoes,
  menu,
  respostaDeletar,
  respostaListar,
  respostaOpcoes,
} from "./src/Functions/functions";

const hospede: Hospedes = new Hospedes();
const reserva: Reserva = new Reserva();
const quarto: Quarto = new Quarto();

let resposta: number = 0;

while (resposta !== 5) {
  resposta = menu(); // 

  switch (resposta) {
    case 1:
      const cadastroResposta: number = cadastroOpcoes(); 
      if (cadastroResposta == 1) {
        reserva.cadastrarReserva(hospede, quarto);
      } else if (cadastroResposta == 2) {
        hospede.cadastrarHospede();
      }
      break;

    case 2:
      const opcaoAtualizar: number = atualizarOpcoes(); // 
      if (opcaoAtualizar == 1) {
        hospede.atualizarHospede();
      } else if (opcaoAtualizar == 2) {
        reserva.atualizarReserva();
      } else if (opcaoAtualizar == 3) {
        quarto.atualizarQuarto();
      }
      break;

    case 3:
      const opcaoDeletar: number = deletarOpcoes(); // Captura a escolha de deletar
      if (opcaoDeletar == 1) {
        hospede.deletarHospede();
      } else if (opcaoDeletar == 2) {
        reserva.deletarReserva();
      } else if (opcaoDeletar == 3) {
        quarto.deletarQuarto();
      }
      break;

    case 4:
      const opcaoListar: number = listarOpcoes(); // Captura a escolha de listar
      if (opcaoListar == 1) {
        hospede.mostrarHospedes();
      } else if (opcaoListar == 2) {
        quarto.mostrarQuartos();
      } else if (opcaoListar == 3) {
        reserva.mostrarReservas();
      }
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}

export { hospede };
