System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adicionar(negociacao) {
                    this._negociacoes.unshift(negociacao);
                }
                paraArray() {
                    const newArray = this._negociacoes.slice();
                    return newArray;
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
