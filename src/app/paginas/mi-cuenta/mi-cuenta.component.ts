import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario  } from "src/app/interfaces/usuario"
import { MatDialog } from '@angular/material/dialog';
import { CambioPasswordComponent } from 'src/app/Dialogos/cambio-password/cambio-password.component';


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



  constructor(private usrServ : UsuariosService, public dialog : MatDialog) { 
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

  changePassword(){
    this.dialog.open(CambioPasswordComponent)
  }

  ngOnInit(): void {
  }

}
