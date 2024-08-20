import { menu } from "../Functions/functions";
const rl = require("readline-sync");

class Hospedes {
  private id!: number;
  private nome!: string;
  private endereco!: string;
  private telefone!: string;
  private hospedes: Hospedes[] = [];

  constructor() {}

  setNome(nome: string) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

  setTelefone(telefone: string) {
    this.telefone = telefone;
  }

  getTelefone() {
    return this.telefone;
  }

  setEndereco(endereco: string) {
    this.endereco = endereco;
  }

  getEndereco() {
    return this.endereco;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  public cadastrarHospede(): void {
    try {
      const nome: string = rl.question("Digite o nome do hóspede: ");
      const endereco: string = rl.question("Digite o endereço: ");
      const telefone: string = rl.question("Digite o telefone: ");

      const novoHospede: Hospedes = new Hospedes();

      novoHospede.setNome(nome);
      novoHospede.setEndereco(endereco);
      novoHospede.setTelefone(telefone);
      novoHospede.setId(
        this.hospedes.length > 0
          ? this.hospedes[this.hospedes.length - 1].getId() + 1
          : 1
      );

      this.hospedes.push(novoHospede);
      console.log("Hóspede cadastrado com sucesso.");
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao cadastrar hóspede:", err.message);
    }
  }

  public procurarHospede(id: number): Hospedes | undefined {
    return this.hospedes.find((h) => h.getId() === id);
  }

  public atualizarHospede(): void {
    try {
      const id: number = parseInt(rl.question("Digite o ID do hóspede: "));
      const hospedeExiste: Hospedes | undefined = this.procurarHospede(id);

      if (!hospedeExiste) {
        throw new Error("Hóspede não existe.");
      } else {
        const opcaoAtualizar: number = parseInt(
          rl.question(
            "1 - Atualizar nome\n2 - Atualizar endereço\n3 - Atualizar telefone\n4 - Voltar ao menu\nEscolha uma opção: "
          )
        );

        if (opcaoAtualizar === 1) {
          const novoNome: string = rl.question("Digite o novo nome: ");
          hospedeExiste.setNome(novoNome);
        } else if (opcaoAtualizar === 2) {
          const novoEndereco: string = rl.question("Digite o novo endereço: ");
          hospedeExiste.setEndereco(novoEndereco);
        } else if (opcaoAtualizar === 3) {
          const novoTelefone: string = rl.question("Digite o novo telefone: ");
          hospedeExiste.setTelefone(novoTelefone);
        } else if (opcaoAtualizar === 4) {
          menu();
        } else {
          throw new Error("Opção inválida.");
        }

        console.log("Hóspede atualizado com sucesso.");
      }
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao atualizar hóspede:", err.message);
      menu();
    }
  }

  public deletarHospede(): void {
    try {
      const idDeletar: number = parseInt(
        rl.question("Digite o ID do hóspede a ser deletado: ")
      );
      const hospedeExiste: Hospedes | undefined =
        this.procurarHospede(idDeletar);

      if (!hospedeExiste) {
        throw new Error("Hóspede não existe ou não foi encontrado.");
      } else {
        const getIndex: number = this.getIndexHospede(idDeletar);

        if (getIndex !== -1) {
          this.hospedes.splice(getIndex, 1);
          console.log("Hóspede removido com sucesso.");
        }
      }
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao deletar hóspede:", err.message);
    }
  }

  public getIndexHospede(id: number): number {
    return this.hospedes.findIndex((h) => h.getId() === id);
  }

  public mostrarHospedes(): void {
    this.hospedes.forEach((hospede) => {
      console.log(
        `ID: ${hospede.getId()}\nNome: ${hospede.getNome()}\nEndereço: ${hospede.getEndereco()}\nTelefone: ${hospede.getTelefone()}\n`
      );
    });
  }
}

export { Hospedes };
