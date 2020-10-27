import { Negociacao } from './Negociacao';

export class Negociacoes{

   private _negociacoes: Array<Negociacao> = [];

   adicionar(negociacao: Negociacao): void{
      this._negociacoes.unshift(negociacao);
   }

   paraArray(): Negociacao[]{
      const newArray = this._negociacoes.slice();
      return newArray;
   }


}