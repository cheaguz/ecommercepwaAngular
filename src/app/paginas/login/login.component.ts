import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router'
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { ReestablecerPasswordComponent } from 'src/app/Dialogos/reestablecer-password/reestablecer-password.component';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myForm:FormGroup;
  constructor( private usrServ: UsuariosService,
     private fb:FormBuilder,
      private _snackBar:MatSnackBar,
      private router:Router,
      private _location: Location,
      public dialog: MatDialog) {
        
    this.myForm=this.fb.group({
      user:["",[Validators.required]],
      password:["",[Validators.required]]
    })
   }
  
   login(){
    this.usrServ.login(this.myForm.value)
    .subscribe(
      data=>{
        if(data["token"]){
          this._snackBar.open(("Bienvenido "+this.myForm.value.user), null, {
            duration: 3000,
          });
          this.usrServ.authenticate(data["token"],data["usuarioId"])
          this.router.navigateByUrl('/')
        }else{
          this._snackBar.open(data["message"], null, {
            duration: 2000,
            panelClass : "error"
          });
        }
      },
      err=>{
        console.log("err",err)
      }
    )

  }

  openDialog(){
   this.dialog.open(ReestablecerPasswordComponent)
  }

  ngOnInit(): void {
  }

}
