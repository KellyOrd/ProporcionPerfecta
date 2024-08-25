import { NgModule } from'@angular/core';
import { RouterModule } from'@angular/router';
import { Routes } from'@angular/router';
import { HomeCalculadorasComponent } from'./home-calculadoras/home-calculadoras.component';
import { CocinaCalculadoraComponent } from'./cocina-calculadora/cocina-calculadora.component';
import { PanaderiaCalculadoraComponent } from'./panaderia-calculadora/panaderia-calculadora.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

export const routes: Routes = [
    { path: '', component: HomeCalculadorasComponent },  // Página principal
    { path: 'cocina-calculadora', component: CocinaCalculadoraComponent },
    { path: 'panaderia-calculadora', component: PanaderiaCalculadoraComponent },
    { path: 'acerca', component: AcercaDeComponent },  // Asegúrate de que este componente exista
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
