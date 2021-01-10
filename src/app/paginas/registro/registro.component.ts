import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HomeComponent } from '../home/home.component';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder, private usrServ:UsuariosService,private _snackBar:MatSnackBar) { 
    this.myForm=this.fb.group({
      name : ["",[Validators.required]],
      lastname:["",[Validators.required]],
      user:["",[Validators.required]],
      email :["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    })
  }
  registro(){
    this.usrServ.create(this.myForm.value)
    .subscribe(
      data=>{
        this._snackBar.open(data["message"], null, {
          duration: 2000,
        })
        console.log(data)
      },
      err=>{
        this._snackBar.open(err["message"], null, {
          duration: 2000,
          panelClass : "error"
        });
      }
    )
  }

  ngOnInit(): void {
  }

}
