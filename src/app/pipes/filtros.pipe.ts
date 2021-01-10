import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultadosProductos = [];
    for(let producto of value){
      if(producto.name.toLowerCase().indexOf(arg) > -1){
        resultadosProductos.push(producto);
      }
    }
   return resultadosProductos;
  }

}
