import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinalPanaderiaComponent } from '../final-panaderia/final-panaderia.component';

@Component({
  selector: 'app-home-calculadoras',
  templateUrl: './home-calculadoras.component.html',
  styleUrls: ['./home-calculadoras.component.css'],
  standalone: true,
  imports: [FinalPanaderiaComponent]  // Asegúrate de que el componente esté importado aquí
})
export class HomeCalculadorasComponent {

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
