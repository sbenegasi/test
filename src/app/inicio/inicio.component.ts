import { Component, OnInit, ɵresolveComponentResources } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

componente:any=""

  constructor() { }

  ngOnInit(): void {
  }

  prueba():void{
    this.componente = document.querySelector('#pepe');
    console.log("componente cambia a federico?")
    this.componente.document.innerHTML="federico";

  }

}
