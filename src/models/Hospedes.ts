class Hospede {
  private nome: string;
  private endereco: string;
  private telefone: string;

  constructor(nome: string, endereco: string, telefone: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }

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
