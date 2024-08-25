import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
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


    // 5. Ajustar el cálculo de las raciones
    const pesoEstimadoRacion = 0.36; // Cambiar este valor si esperas un peso por ración diferente

    if (this.pesoReceta > 0) {
      this.raciones = Math.floor(this.pesoReceta / pesoEstimadoRacion);
      if (this.raciones < 1) this.raciones = 1; // Asegurar al menos 1 ración
    } else {
      this.raciones = 0;
    }

    // 6. Calcular el peso por ración
    if (this.raciones > 0) {
      this.pesoRacion = this.pesoReceta / this.raciones;
    } else {
      this.pesoRacion = 0;
    }
  
    // 7. Calcular el costo por ración
    if (this.pesoRacion > 0 && this.costoKiloReceta > 0) {
      this.costoRacion = this.pesoRacion * this.costoKiloReceta;
    } else {
      this.costoRacion = 0;
    }
  }
}
