System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(milisegundos = 500) {
        return function (target, key, descriptor) {
            const metodoAtual = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (window.event) {
                    window.event.preventDefault();
                }
                clearInterval(timer);
                timer = setTimeout(() => metodoAtual.apply(this, args), milisegundos);
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
