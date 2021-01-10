import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get("http://localhost:3000/products")
   }

   getPage(data){
     return this.http.get("http://localhost:3000/products?page="+data)
   }

   getById(data){
     return this.http.get("http://localhost:3000/products/"+data)
   }

   getCategories(){
     return this.http.get("http://localhost:3000/categories")
   }

   getByCategories(data){
    return this.http.get("http://localhost:3000/products/categoria/"+data);
   }

   search(query){
     return this.http.get("http://localhost:3000/products?buscar="+query)
   }
 
}