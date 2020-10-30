import { Imprimivel } from "../models/Imprimiivel";
import { Negociacao } from "../models/Negociacao";

export function imprimir(...objetos: Imprimivel[]){
   objetos.forEach( objeto => objeto.paraTexto());

}