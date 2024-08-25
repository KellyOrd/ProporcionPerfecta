import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-panaderia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-panaderia.component.html',
  styleUrls: ['./calculadora-panaderia.component.css']
})
export class CalculadoraPanaderiaComponent {
  @Input() ingredientes: any[] = [];
  costoFicha: number = 0;
  pesoReceta: number = 0;
  porcentaje: number = 0;
  costoKiloReceta: number = 0;
  raciones: number = 0;
  pesoRacion: number = 0;
  costoRacion: number = 0;

  calcularValores() {
    // 1. Sumar todos los valores de costoReceta
    this.costoFicha = this.ingredientes.reduce((total, ing) => total + (ing.costoReceta || 0), 0);
  
    // 2. Sumar todos los valores de peso
    this.pesoReceta = this.ingredientes.reduce((total, ing) => total + (ing.peso || 0), 0);
  
    // 3. Calcular el 5% de la suma de costoFicha
    this.porcentaje = this.costoFicha * 0.05;
  
    // 4. Calcular el costo por kilo de receta
    if (this.pesoReceta > 0) {
      this.costoKiloReceta = (this.costoFicha * 1.05) / this.pesoReceta;
    } else {
      this.costoKiloReceta = 0;
    }

    // 5. Calcular el número de raciones
    this.raciones = Math.round(this.pesoReceta / 0.070); // Suponiendo que cada ración debe ser de 70 gramos

    // 6. Calcular el peso por ración
    if (this.raciones > 0) {
      this.pesoRacion = this.pesoReceta / this.raciones;
    } else {
      this.pesoRacion = 0;
    }
  
    // 7. Calcular el costo por ración
    if (this.raciones > 0) {
      this.costoRacion = this.costoFicha / this.raciones;
    } else {
      this.costoRacion = 0;
    }
  }
}
