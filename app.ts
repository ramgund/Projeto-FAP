const rl = require("readline-sync");
import { Hospedes } from "./src/models/Hospedes";
import { Quarto } from "./src/models/Quarto";
import { Reserva } from "./src/models/Reserva";
import { cadastroOpcoes, menu } from "./src/Functions/functions";

const hospedes: Hospedes[] = [];

const resposta: number = menu();
const cadastroResposta: number = cadastroOpcoes();

while (resposta !== 5) {
  switch (resposta) {
    case 1:
      if (cadastroResposta == 1) {
        const novaReserva: Reserva = new Reserva();
        const quarto: Quarto = new Quarto();
        const hospede: Hospedes = new Hospedes();
        novaReserva.cadastrarReserva(hospede, quarto);
      } else {
        const novoHospede: Hospedes = new Hospedes();
        novoHospede.cadastrarHospede();
      }
      break;

      case 2: 
  }
}

export { hospedes };
