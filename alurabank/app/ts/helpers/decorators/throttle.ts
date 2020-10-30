export function throttle(milisegundos: number = 500){

   return function(target: any, key: string, descriptor: PropertyDescriptor){
      
      const metodoAtual = descriptor.value;
      let timer = 0;
      descriptor.value = function(...args: any[]){
         if(window.event){
            window.event.preventDefault();
         }
         clearInterval(timer);
         timer = setTimeout(() => metodoAtual.apply(this, args), milisegundos)
      }

      return descriptor;
   }
}