const rl = require("readline-sync");
import { Hospedes } from "./src/models/Hospedes";
import { Quarto } from "./src/models/Quarto";
import { Reserva } from "./src/models/Reserva";

const menuUser = (): number => {
  return parseInt(
    rl.question(
      "===MENU===\n1 - Cadastro\n2 - Atualizar\n3 - Deletar\n4 - Listar\n5 - Sair"
    )
  );
};

const escolhaCadastro = (): number => {
  return parseInt(
    rl.question(
      "==============\n1 - Cadastrar hospede\n 2 - Cadastrar reserva\n 3 - Voltar ao menu "
    )
  );
};

const cadastroCatch: number = escolhaCadastro();

const menuEscolha: number = menuUser();

while (menuEscolha !== 5) {
  switch (menuEscolha) {
    case 1:
      if (cadastroCatch == 1) {
        try {
          const hospedeNome: string = rl.question("Digite o nome do hospede: ");

          if (typeof hospedeNome !== "string" || hospedeNome.trim() === "") {
            throw new Error("Nome invalido, tente novamente.");
          }
          const novoHospede = new Hospedes();
          novoHospede.setNome(hospedeNome);
        } catch (Error) {
          console.error("Erro ao cadastrar o nome: ", Error.message);
        }
      }
  }
}
