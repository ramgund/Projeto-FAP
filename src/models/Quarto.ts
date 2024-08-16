class Quarto {
  private numero: bigint;
  private tipoQuarto: string;
  private tarifaDiaria: GLfloat;

  constructor(numero: bigint, tipoQuarto: string, tarifaDiaria: GLfloat) {
    this.numero = numero;
    this.tipoQuarto = tipoQuarto;
    this.tarifaDiaria = tarifaDiaria;
  }

  setNumero(numero: bigint) {
    this.numero = numero;
  }

  getNumero() {
    return this.numero;
  }

  setTipoQuarto(tipoQuarto: string) {
    this.tipoQuarto = tipoQuarto;
  }

  getTipoQuarto() {
    return this.tipoQuarto;
  }

  setTarifaDiaria(tarifaDiaria: GLfloat) {
    this.tarifaDiaria = tarifaDiaria;
  }

  getTarifaDiaria() {
    return this.tarifaDiaria;
  }
}

export { Quarto };
