import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/Negociacoes";
import { MensagemView } from "../views/MensagemView";
import { NegociacoesView } from "../views/NegociacoesView";
import { logarTempoDeExecucao,  domInject, throttle} from '../helpers/decorators/index';
import { NegociacaoParcial } from '../models/NegociacaoParcial';
import { HandlerFunction, NegociacaoService } from '../service/NegociacaoService'


export class NegociacaoController{

   @domInject('#data')
   private _inputData: HTMLInputElement;

   @domInject('#quantidade')
   private _inputQuantidade: HTMLInputElement;

   @domInject('#valor')
   private _inputValor: HTMLInputElement;
   
   private _negociacoes = new Negociacoes();
   private _negociacoesView = new NegociacoesView('#negociacoesView');
   private _mensagemView = new MensagemView("#mensagemView");
   private _negociacaoService = new NegociacaoService();

   constructor(){
      this._negociacoesView.update(this._negociacoes);
   }

   @throttle()
   adicionar(): void | null{

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

   @throttle(500)
   importaDados(){

      const isOk: HandlerFunction = function (res: Response){
         if(res.ok){
            return res;
         } else {
            throw new Error(res.statusText);
         }
      }
      
      this._negociacaoService.obterNegociacoes(isOk)
         .then(negociacoes => {
      
            negociacoes.forEach(negociacao => 
               this._negociacoes.adicionar(negociacao))
               
            this._negociacoesView.update(this._negociacoes);
      });
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