import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient  } from '@angular/common/http';
import { usuariobd } from './usuariobd'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url="http://localhost:5000/User/X";//URL del localhost que usamos
  user:string;
  password:string;
  menssage:string;
  productos:usuariobd[];
  usu:usuariobd;
  constructor(public router:Router, private http:HttpClient) { }
  ngOnInit() {
  }



  validarUsuario(){

    this.http.get<usuariobd>(this.url+"/"+this.password).subscribe(resp=>{
      this.usu=resp;
    })

    if(this.user==this.usu.user)
    {
      if(this.password==this.usu.password)
      {
        this.user="";
        this.password="";
        this.menssage="";
        window.localStorage.setItem('sesion','iniciada');
        this.router.navigate(['']);
      }
      else
      {
        this.menssage="Contraseña Incorrecta"
      }
    }
    else
    {
      this.menssage="Usuario Incorrecto";
    }

  }
  RegistrarUsuario(){

  }

}
