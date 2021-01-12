import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

compra=JSON.parse(sessionStorage.getItem("compra"));
pagoSeleccionado: string;
formasDepago: string[] = ['Efectivo', 'Mercado_pago'];
msg : "Compra realizada con exito!";

  constructor(private usrServ:UsuariosService,private _snackBar:MatSnackBar) {
 
  }

  comprar(){
    let tiket = {
      user_id : this.compra.user_id,
      product_id: this.compra.product_id,
      cantidad : this.compra.cantidad,
      priceWeb : this.compra.priceWeb,
      totalWeb : this.compra.totalWeb,
      pago : this.pagoSeleccionado
    };



    this.usrServ.sale(tiket)
      .subscribe(data=>{
          if(data){
               this._snackBar.open("Compra realizada con exito!,En la brevedad llegara un mail con los datos de tu compra", null, {
            duration: 7000,
          });
          }
    },
    err=>{
      console.log(err)
    })
  }

 
  ngOnInit(): void {
  }

}


