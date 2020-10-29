export abstract class View<T> {

   private _elemento: Element;
   private _escapar: boolean;

   constructor(seletor: string, escapar: boolean = false){

      this._elemento = document.querySelector(seletor);
      this._escapar = escapar;
   }

   update(modelo: T): void{
      let template = this.template(modelo);
      if(this._escapar){
         template = template.replace(/<script>[\s\S]*?<\/script>/g,'');
      }
      this._elemento.innerHTML = this.template(modelo);
   }

   abstract template(modelo: T): string;
}