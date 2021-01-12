import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto , ProductoPaginator } from "src/app/interfaces/producto"

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:Producto[]=[{
    _id : "",
    name : "",
    description : "",
    sku : 0,
    image : "",
    price : 0,
    quantity : 0,
    category : {name:""}
  }];
  
  dataPaginado:ProductoPaginator;
  search:string = "";
  filterProduct = "";
hasNextPage: boolean;
hasPrevPage: boolean;
nextPage: number;
page: number;
prevPage: any;
pagina;
min:"";
max:"";

 

  constructor( private prdServ: ProductosService) { 
    this.prdServ.getAll()
    .subscribe((data:ProductoPaginator)=>{
      this.productos = data.docs; 
      this.dataPaginado = data;
      this.hasPrevPage = data.hasPrevPage;
      this.hasNextPage = data.hasNextPage;
      
    },
    err=>{
      console.log("Error",err)
    });

    
  }
  //VER COMO SIMPLIFICAR 
 


  next(){
    this.prdServ.getPage(this.dataPaginado.nextPage)
    .subscribe((data:ProductoPaginator)=>{
      this.productos = data.docs; 
      this.dataPaginado = data;
      this.hasPrevPage = data.hasPrevPage;
      this.hasNextPage = data.hasNextPage;

    },
    err=>{
      console.log("Error",err)
    });
  }

  prev(){
    this.prdServ.getPage(this.dataPaginado.prevPage)
    .subscribe((data:ProductoPaginator)=>{
      this.productos = data.docs; 
      this.dataPaginado = data;  
      this.hasPrevPage = data.hasPrevPage;
      this.hasNextPage = data.hasNextPage;
 
    },
    err=>{
      console.log("Error",err)
    });
  }
  

  buscar(){
    this.prdServ.search(this.search)
    .subscribe((data:ProductoPaginator)=>{
      this.productos = data.docs; 
      this.hasNextPage=data["hasNextPage"];
      this.hasPrevPage=data["hasPrevPage"];
      this.nextPage=data["nextPage"];
      this.prevPage=data["prevPage"];
   },
   err=>{
     console.log(err)
   });
  }


  filterPrice(){
    this.prdServ.filterPrice(this.min,this.max)
    .subscribe((data:ProductoPaginator)=>{
      this.productos = data.docs; 
      this.hasNextPage=data["hasNextPage"];
      this.hasPrevPage=data["hasPrevPage"];
      this.nextPage=data["nextPage"];
      this.prevPage=data["prevPage"];
   },
   err=>{
     console.log(err)
   });
  }

 ngOnInit(): void {}

}
