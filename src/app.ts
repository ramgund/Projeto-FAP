import CrudQuarto from "./crud/CrudQuarto";
import { Quarto } from "./models/Quarto";

//Criando obj de CrudQuarto
let objCrudQuarto: CrudQuarto = new CrudQuarto();


//Criando objetos Quarto
let objQuarto1: Quarto = new Quarto(BigInt(1), "solteiro", 80.90);
let objQuarto2: Quarto = new Quarto(BigInt(2), "casal", 80.90);
let objQuarto3: Quarto = new Quarto(BigInt(3), "solteiro", 80.90);

//Adicionando objetos quarto
objCrudQuarto.adicionarQuarto(objQuarto1);
objCrudQuarto.adicionarQuarto(objQuarto2);
objCrudQuarto.adicionarQuarto(objQuarto3);

//Imprimindo Lista de Quartos
console.log("Lista de Quartos: ");
console.log(objCrudQuarto.getListaDeQuartos());
console.log("\n\n");

//Buscando Quarto 2
let quartoBusca = objCrudQuarto.buscarQuarto(BigInt(2));

console.log("Resultado da Busca");
console.log(quartoBusca);
console.log("\n\n");

let removeuQuarto: boolean = objCrudQuarto.removerQuarto(BigInt(1));

console.log("Removendo Quarto");
console.log("Removeu Quarto: ", removeuQuarto);
console.log("\n\n");

//Atualizando Quarto 3 para Quarto 4
objCrudQuarto.atualizarQuarto(3, new Quarto(BigInt(4), "casal", 99.90));

//Imprmindo Lista Atualizada de Quartos
console.log(objCrudQuarto.getListaDeQuartos());



