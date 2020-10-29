System.register(["../models/Negociacao", "../models/Negociacoes", "../views/MensagemView", "../views/NegociacoesView"], function (exports_1, context_1) {
    "use strict";
    var Negociacao_1, Negociacoes_1, MensagemView_1, NegociacoesView_1, NegociacaoController, DiaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesView = new NegociacoesView_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new MensagemView_1.MensagemView("#mensagemView");
                    this._inputData = document.querySelector('#data');
                    this._inputQuantidade = document.querySelector('#quantidade');
                    this._inputValor = document.querySelector('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.value.replace(/-/g, ','));
                    if (!this._diaUtil(data)) {
                        this._mensagemView.update('Você só pode fazer negociações em dias úteis. Por favor, escolha outra data!');
                        return;
                    }
                    const negociacao = new Negociacao_1.Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                _diaUtil(data) {
                    return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
