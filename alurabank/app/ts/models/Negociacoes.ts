import { Igualavel } from './Igualavel';
import { Imprimivel } from './Imprimiivel';
import { Negociacao } from './Negociacao';

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes>{

   private _negociacoes: Array<Negociacao> = [];

   adicionar(negociacao: Negociacao): void{
      this._negociacoes.unshift(negociacao);
   }

   paraArray(): Negociacao[]{
      const newArray = this._negociacoes.slice();
      return newArray;
   }

   paraTexto(): void{
      console.log(JSON.stringify(this._negociacoes));
   }

   ehIgual(negociacoes: Negociacoes): boolean{
      return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray())
   }
}