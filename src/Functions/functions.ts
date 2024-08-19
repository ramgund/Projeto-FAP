const rl = require("readline-sync");
import { hospedes } from "../../app";
import { Hospedes } from "../models/Hospedes";

const cadastroOpcoes = () => {
  return parseInt(
    rl.question("1 - Cadastrar reserva\n2 - Cadastrar hospede:  ")
  );
};



const menu = (): number => {
  return parseInt(
    rl.question(
      "=====MENU=====\n1 - Cadastrar reserva/hospede\n2 - Atualizar\n3 - Deletar\n4 - Atualizar\n5 - Sair"
    )
  );
};

export { cadastroOpcoes, menu};
