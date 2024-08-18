class Hospedes {
  private nome: string;
  private endereco: string;
  private telefone: string;

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
}

export { Hospedes };
