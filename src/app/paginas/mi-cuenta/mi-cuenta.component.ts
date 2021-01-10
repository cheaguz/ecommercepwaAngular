import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario  } from "src/app/interfaces/usuario"


@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
user: any = {
  name : "",
  lastname : "",
  email : "",
  user : "",
}

compras = [];



  constructor(private usrServ : UsuariosService) { 
    var userId = JSON.parse(localStorage.getItem("user id"));
   
    this.usrServ.getById(userId)
    .subscribe(data=>{
      console.log(data)
      this.user = data;
      this.compras = data["compras"];
      console.log("userdata",this.user)
    },
    err=>{
      console.log(err)
    });
      
    

  

  }

  ngOnInit(): void {
  }

}
