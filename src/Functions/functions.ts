const rl = require("readline-sync");
import { Hospedes } from "../models/Hospedes";

// menu
const menu = (): number => {
  return parseInt(
    rl.question(
      "=====MENU=====\n1 - Cadastrar reserva/hospede\n2 - Atualizar\n3 - Deletar\n4 - Listar\n5 - Sair"
    )
  );
};

let respostaMenu = menu();

// cadastro
const cadastroOpcoes = () => {
  return parseInt(
    rl.question("1 - Cadastrar reserva\n2 - Cadastrar hospede:  ")
  );
};

let cadastroResposta: number = cadastroOpcoes();

// atualizar
const atualizarOpcoes = (): number => {
  return parseInt(rl.question("1 - Atualizar hospede\n2 - Atualizar reserva"));
};

const opcaoAtualizar: number = atualizarOpcoes();

// deletar
const deletarOpcoes = (): number => {
  return parseInt(
    rl.question("1 - Deletar hospede\n2 - Deletar reserva\n3 - Deletar quarto")
  );
};

const opcaoDeletar: number = deletarOpcoes();

// listar
const listarOpcoes = (): number => {
  return parseInt(
    rl.question(
      "1 - Listar Hospedes\n2 - Listar Quartos\n3 - Listar Reservas\n4 - Voltar ao menu"
    )
  );
};

const opcaoListar: number = listarOpcoes();

export {
  cadastroResposta,
  menu,
  atualizarOpcoes,
  opcaoAtualizar,
  opcaoDeletar,
  deletarOpcoes,
  listarOpcoes,
  opcaoListar,
  respostaMenu,
};
