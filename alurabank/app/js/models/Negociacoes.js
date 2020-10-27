class Negociacoes {
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
}
