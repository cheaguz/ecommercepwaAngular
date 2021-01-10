import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import {Categorias} from 'src/app/interfaces/categorias'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened = false;
  categories:Categorias[]=[{
    _id : "",
    name : "",
    image : ""
  }];

  carrousell:Categorias[]=[{
    _id : "",
    name : "",
    image : ""
  }];

  search:string;
 
  

  constructor(private prdServ: ProductosService) {
    this.prdServ.getCategories()
    .subscribe((data:Categorias[])=>{
      this.categories=data;
      this.carrousell=this.categories.slice()
    },
    err=>{
      console.log("err",err)
    })
    
   }//const

  next(){
    var element = this.carrousell.shift();
    this.carrousell.push(element)
  
  }
  
  prev(){
    var element = this.carrousell.pop();
    this.carrousell.unshift(element)
  }




  

  
    






  ngOnInit(): void {
  }

}


/*
CREAR FUNCION PARA CAMIBAR LAS IMAGENES

ARRAY 0
      1
      2
      3

    CLICK NEXT
      ARRAY +1
    CLICK BACK
    ARRAY -1

*/