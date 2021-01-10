import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos-categorias',
  templateUrl: './productos-categorias.component.html',
  styleUrls: ['./productos-categorias.component.css']
})
export class ProductosCategoriasComponent implements OnInit {
  productos;
 disabled=false;

  constructor(private route:ActivatedRoute, private prdServ:ProductosService) {
    const id = this.route.snapshot.paramMap.get("id");
    this.prdServ.getByCategories(id)
    .subscribe(data=>{
      this.productos=data;
    },
    err=>{
      console.log("error",err)
    })
  


   }

  ngOnInit(): void {
    
  }

}