import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
//{'ruta':componente} 

{path:"uno","component":Componente1Component},
{path:"dos","component":Componente2Component},
{path:"tres","component":Componente3Component},
{path:"login","component":LoginComponent},
{path:"home","component":HomeComponent},

{path:"","component":InicioComponent},

//{path:"","component":AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
