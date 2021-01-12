import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
authenticationState = new BehaviorSubject((localStorage.getItem("token")?true:false));

  constructor(private http:HttpClient) { }
  create(datos){
    return this.http.post("http://localhost:3000/users/register", datos)
  }

  login(data){
    return this.http.post("http://localhost:3000/users/login", data)
  }


  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("user id");
    sessionStorage.removeItem("compra")
    this.authenticationState.next(false)
    
  }

  authenticate(token:string,usuarioId:string){
     localStorage.setItem("token",token);
     localStorage.setItem("user id", JSON.stringify(usuarioId))
    this.authenticationState.next(true)
  }

  isAuthenticate(){
    return this.authenticationState
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }

 sale(data){
  return this.http.post("http://localhost:3000/sales",data)
 }

 getById(id){
   return this.http.get("http://localhost:3000/users/"+id)
 }

requestnewPassword (user){
  return this.http.post("http://localhost:3000/users/generate-password",user)
}

changePassword(id,password){
  return this.http.put("http://localhost:3000/users/"+id,password)
}


}
