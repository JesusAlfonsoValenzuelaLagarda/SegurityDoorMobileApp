import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string;
  pass:string;
  mensaje:string;
  constructor(public router:Router) { }
  ngOnInit() {
  }
  validarUsuario(){
    if(this.usuario=="usuario")
    {
      if(this.pass=="1234")
      {
        this.usuario="";
        this.pass="";
        this.mensaje="";
        window.localStorage.setItem('sesion','iniciada');
        this.router.navigate(['']);
      }
      else
      {
        this.mensaje="Contraseña Incorrecta"
      }
    }
    else
    {
      this.mensaje="Usuario Incorrecto";
    }

  }
  RegistrarUsuario(){
    
  }

}
