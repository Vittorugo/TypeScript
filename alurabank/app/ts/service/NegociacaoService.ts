import { Negociacao } from "../models/Negociacao";
import { NegociacaoParcial } from "../models/NegociacaoParcial";

export class NegociacaoService {

   obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

       return <Promise<Negociacao[]>> fetch('http://localhost:8080/dados')
           .then(res => handler(res))
           .then(res => res.json())
           .then((dados: NegociacaoParcial[]) => 
               dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
           )
           .catch(err => {
                console.log(err)
                throw new Error('Não foi possível importar as negociações!')
            });

   }
}

export interface HandlerFunction{
   
   (res: Response): Response;
}