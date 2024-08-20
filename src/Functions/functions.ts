const rl = require("readline-sync");
import { Hospedes } from "../models/Hospedes";

const cadastroOpcoes = () => {
  return parseInt(
    rl.question("1 - Cadastrar reserva\n2 - Cadastrar hospede:  ")
  );
};

const menu = (): number => {
  return parseInt(
    rl.question(
      "=====MENU=====\n1 - Cadastrar reserva/hospede\n2 - Atualizar\n3 - Deletar\n4 - Listar\n5 - Sair"
    )
  );
};

const atualizarOpcoes = (): number => {
  return parseInt(rl.question("1 - Atualizar hospede\n2 - Atualizar reserva"));
};

const respostaOpcoes: number = atualizarOpcoes();

const deletarOpcoes = (): number => {
  return parseInt(
    rl.question("1 - Deletar hospede\n2 - Deletar reserva\n3 - Deletar quarto")
  );
};

const listarOpcoes = (): number => {
  return parseInt(
    rl.question(
      "1 - Listar Hospedes\n2 - Listar Quartos\n3 - Listar Reservas\n4 - Voltar ao menu"
    )
  );
};

const respostaListar: number = listarOpcoes();

const respostaDeletar: number = deletarOpcoes();
export {
  cadastroOpcoes,
  menu,
  atualizarOpcoes,
  respostaOpcoes,
  respostaDeletar,
  deletarOpcoes,
  listarOpcoes,
  respostaListar,
};
