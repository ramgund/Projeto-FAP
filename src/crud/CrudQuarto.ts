import { Quarto } from "../models/Quarto";

class CrudQuarto {

    private listaDeQuartos: Array<Quarto>;

    constructor() {
        this.listaDeQuartos = new Array<Quarto>();
    }

    public adicionarQuarto(meuQuarto: Quarto) {

        this.listaDeQuartos.push(meuQuarto);
    }

    public buscarQuarto(numero: BigInt) {
        
        for(let i = 0; i < this.listaDeQuartos.length; i++) {
            let quarto: Quarto = this.listaDeQuartos[i];

            if(quarto.getNumero() == numero) {
                return quarto;
            }
        }
    }

    public removerQuarto(numero: BigInt) {
        for(let i = 0; i < this.listaDeQuartos.length; i++) {
            let quarto: Quarto = this.listaDeQuartos[i];

            if(quarto.getNumero() == numero) {
                this.listaDeQuartos.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    public atualizarQuarto(numero: number, novoQuarto: Quarto) {
        for(let i = 0; i < this.listaDeQuartos.length; i++) {
            let quarto = this.listaDeQuartos[i];

            if(quarto.getNumero() == BigInt(numero)) {
                this.listaDeQuartos.splice(i, 1, novoQuarto);
            }
        }
    }

    public getListaDeQuartos(): Array<Quarto> {
        return this.listaDeQuartos;
    }
}

export default CrudQuarto;