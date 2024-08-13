class Reserva {
  private dataInicio: Date;
  private dataTermino: Date;

  constructor(datainicio: Date, dataTermino: Date) {
    this.dataInicio = datainicio;
    this.dataTermino = dataTermino;
  }

  setdataIncio(dataInicio: Date) {
    this.dataInicio = dataInicio;
  }

  getDataIncio() {
    return this.dataInicio;
  }

  setDataTermino(dataTermino: Date) {
    this.dataTermino = dataTermino;
  }

  getDataTermino() {
    return this.dataTermino;
  }
}
