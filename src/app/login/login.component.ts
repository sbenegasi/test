import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any="";
  passwd:any="";
  resultado:any="";

  constructor( private router :Router) { 

  }

  ngOnInit(): void {
  }

  actionlogin(){

    this.user = document.querySelector("#user");
    this.passwd = document.querySelector("#passwd");

    this.resultado = document.querySelector("#resultado");
    //console.log(this.user.value)

    if (this.user.value === "" || this.passwd.value === "" ){
      this.resultado.innerHTML = `Rellena todos los campos`;
      console.log(`Usuario: ${this.user.value} Contraseña: ${this.passwd.value}`);
      

  }

   else if (this.user.value == "pepito" && this.passwd.value=="1234" ){
        this.resultado.innerHTML = `Bienvenido ${this.user.value}`;
        console.log(`Usuario: ${this.user.value} Contraseña: ${this.passwd.value}`);
        this.router.navigateByUrl('home');
        

    }
    else if (this.user.value == "jose" && this.passwd.value=="1234" ){
      this.resultado.innerHTML = `Bienvenido ${this.user.value}`;
      console.log(`Usuario: ${this.user.value} Contraseña: ${this.passwd.value}`);
      this.router.navigate(['home']);
  }

      else{
        this.resultado.innerHTML = `El usuario ${this.user.value} no existe o has puesto mal la contraseña`;
        console.log(`Usuario: ${this.user.value} Contraseña: ${this.passwd.value}`);
        //alert(`usuario o contraseña incorrecto`)
      }

  }


}
