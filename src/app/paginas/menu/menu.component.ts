import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 isLogin:boolean = false;

 
  constructor(private usrService:UsuariosService , private prdServ : ProductosService) {
    this.usrService.isAuthenticate()
    .subscribe(login=>{
      this.isLogin=login;
    })   
   }


  logout(){
    this.usrService.logOut();
  }
  
  
buscar(){
  console.log("ok")
}

  

  ngOnInit(): void {
  }

}
