import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/Negociacoes";
import { MensagemView } from "../views/MensagemView";
import { NegociacoesView } from "../views/NegociacoesView";

export class NegociacaoController{

   private _inputData: HTMLInputElement;
   private _inputQuantidade: HTMLInputElement;
   private _inputValor: HTMLInputElement;
   private _negociacoes = new Negociacoes();
   private _negociacoesView = new NegociacoesView('#negociacoesView');
   private _mensagemView = new MensagemView("#mensagemView");

   constructor(){
      this._inputData = <HTMLInputElement> document.querySelector('#data'); 
      this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade'); 
      this._inputValor = <HTMLInputElement> document.querySelector('#valor'); 
      this._negociacoesView.update(this._negociacoes);
   }

   adicionar(event: Event): void | null{

      event.preventDefault();

      let data = new Date(this._inputData.value.replace(/-/g,','));
      if(!this._diaUtil(data)){
         this._mensagemView.update('Você só pode fazer negociações em dias úteis. Por favor, escolha outra data!')
         return
      }      

      const negociacao = new Negociacao(
         new Date(this._inputData.value.replace(/-/g,',')),
         parseInt(this._inputQuantidade.value),
         parseFloat(this._inputValor.value)
      );
      
      this._negociacoes.adicionar(negociacao);
      
      this._negociacoesView.update(this._negociacoes);
      this._mensagemView.update('Negociação adicionada com sucesso!');
   }

   private _diaUtil(data: Date): boolean{
      return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado
   }
}

enum DiaDaSemana{
   Domingo,
   Segunda,
   Terca,
   Quarta,
   Quinta,
   Sexta,
   Sabado
}