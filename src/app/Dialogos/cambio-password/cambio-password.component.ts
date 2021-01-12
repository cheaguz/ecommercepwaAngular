import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cambio-password',
  templateUrl: './cambio-password.component.html',
  styleUrls: ['./cambio-password.component.css']
})
export class CambioPasswordComponent implements OnInit {
  password :"";
  

  constructor(private usrServ : UsuariosService) { }

  sendPassword(){
    let id = JSON.parse(localStorage.getItem("user id"));
    console.log(id)
    this.usrServ.changePassword(id,{password:this.password})
    .subscribe(data=>{
      alert(data['message']);
    },
    err=>{
      console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
