import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {Producto} from 'src/app/interfaces/producto'
import { UsuarioNoRegistradoComponent } from 'src/app/Dialogos/usuario-no-registrado/usuario-no-registrado.component';




@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto={
    _id : "",
    name : "",
    description : "",
    sku : 0,
    image : "",
    price : 0,
    quantity : 0,
    category : {name:""}
  };
  
  isLogin:boolean = false;
  productoId;
  cantidad=1;
 
 
  

  constructor(private route:ActivatedRoute,private prdServ:ProductosService,private _location: Location,public dialog: MatDialog,private usrService:UsuariosService){ 
    const id = this.route.snapshot.paramMap.get("id");
    this.prdServ.getById(id)
    .subscribe((data:Producto)=>{
        this.producto=data
        if(this.producto.message){
          alert(this.producto.message)
        }
      },
      err=>{
        console.log("err",err)
      }
    )
    
    this.usrService.isAuthenticate()
    .subscribe(login=>{
      this.isLogin=login;
    })
   

 
  }

  
  back() {
    this._location.back();
  }



  openDialog() {
    if(!this.isLogin){
      this.dialog.open(UsuarioNoRegistradoComponent);
    }
  }

  generarCompra(data){
    var userId = JSON.parse(localStorage.getItem("user id"))
    var compra={
      user_id : userId,
      product_id : this.producto._id,
      product_image : this.producto.image,
      productoName: this.producto.name,
      priceWeb : this.producto.price,
      cantidad : this.cantidad,
      totalWeb : (this.producto.price * this.cantidad),
      product_name : this.producto.name
    }
    sessionStorage.setItem("compra",JSON.stringify(compra))
   
    
    
 }

  ngOnInit(): void {
  }

}
