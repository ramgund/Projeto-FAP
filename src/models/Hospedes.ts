const rl = require("readline-sync");
class Hospedes {
  private id: number;
  private nome: string;
  private endereco: string;
  private telefone: string;
  private hospedes: Hospedes[];

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
      const nome: string = rl.question("Digite o nome do hospede: ");
      const endereco: string = rl.question("Digite o endereco: ");
      const telefone: string = rl.question("Digite o telefone: ");

      const novoHospede: Hospedes = new Hospedes();

      novoHospede.setNome(nome);
      novoHospede.setEndereco(endereco);
      novoHospede.setTelefone(telefone);
      novoHospede.setId(
        this.hospedes.length > 0
          ? this.hospedes[this.hospedes.length - 1].id + 1
          : 1
      );
      this.hospedes.push(novoHospede);
      console.log("Cadastrado com sucesso.");
    } catch (error) {
      console.error("Erro ao cadastrar hospede");
    }
  }

  public procurarHospede(id: number): Hospedes | undefined {
    return this.hospedes.find((h) => h.getId() == id);
  }
}

export { Hospedes };
