const rl = require("readline-sync");

// menu
const menu = (): number => {
  return parseInt(
    rl.question(
      "=====MENU=====\n1 - Cadastrar reserva/hospede\n2 - Atualizar\n3 - Deletar\n4 - Listar\n5 - Sair: "
    )
  );
};

// cadastro
const cadastroOpcoes = (): number => {
  return parseInt(
    rl.question(
      "1 - Cadastrar reserva\n2 - Cadastrar hospede\n3 - Cadastrar quarto: "
    )
  );
};

// atualizar
const atualizarOpcoes = (): number => {
  return parseInt(
    rl.question(
      "1 - Atualizar hospede\n2 - Atualizar reserva\n3 - Atualizar quarto: "
    )
  );
};

// deletar
const deletarOpcoes = (): number => {
  return parseInt(
    rl.question(
      "1 - Deletar hospede\n2 - Deletar reserva\n3 - Deletar quarto: "
    )
  );
};

// listar
const listarOpcoes = (): number => {
  return parseInt(
    rl.question(
      "1 - Listar Hospedes\n2 - Listar Quartos\n3 - Listar Reservas\n4 - Voltar ao menu: "
    )
  );
};

export { cadastroOpcoes, menu, atualizarOpcoes, deletarOpcoes, listarOpcoes };
