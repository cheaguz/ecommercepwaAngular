import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-reestablecer-password',
  templateUrl: './reestablecer-password.component.html',
  styleUrls: ['./reestablecer-password.component.css']
})
export class ReestablecerPasswordComponent implements OnInit {
user = "";
  constructor(private usrServ : UsuariosService ) {}

   sendPassword(){
     this.usrServ.requestnewPassword({user:this.user})
    .subscribe(data=>{
      alert(data['message'])
      console.log(data)
      console.log(this.user)
    },
    err=>{
      console.log(err)
    });
   }

  ngOnInit(): void {
  }

}
