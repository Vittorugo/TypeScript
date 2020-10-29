System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar = false) {
                    this._elemento = document.querySelector(seletor);
                    this._escapar = escapar;
                }
                update(modelo) {
                    let template = this.template(modelo);
                    if (this._escapar) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    }
                    this._elemento.innerHTML = this.template(modelo);
                }
            };
            exports_1("View", View);
        }
    };
});
