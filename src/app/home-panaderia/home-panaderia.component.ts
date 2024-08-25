import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablaIngredientesPanaderiaComponent } from '../tabla-ingredientes-panaderia/tabla-ingredientes-panaderia.component';
import { CalculadoraPanaderiaComponent } from '../calculadora-panaderia/calculadora-panaderia.component';

@Component({
  selector: 'app-home-panaderia',
  templateUrl: './home-panaderia.component.html',
  styleUrls: ['./home-panaderia.component.css'],
  imports: [FormsModule, CommonModule, TablaIngredientesPanaderiaComponent, CalculadoraPanaderiaComponent],
  standalone: true
})
export class HomePanaderiaComponent {
    nombrePlatillo: string = '';
    tipoElaboracion: string = '';
  
    touchedNombrePlatillo: boolean = false;
    touchedTipoElaboracion: boolean = false;
  
    @ViewChild(TablaIngredientesPanaderiaComponent) tablaIngredientesComponent!: TablaIngredientesPanaderiaComponent;
    @ViewChild(CalculadoraPanaderiaComponent) calculadoraComponent!: CalculadoraPanaderiaComponent;
  
    continuar() {
      this.touchedNombrePlatillo = true;
      this.touchedTipoElaboracion = true;
  
      if (!this.nombrePlatillo) {
        alert('El campo "Nombre del Platillo" es obligatorio.');
        return;
      }
  
      if (!this.tipoElaboracion) {
        alert('El campo "Tipo de Elaboración" es obligatorio.');
        return;
      }
  
      const ingredientes = this.tablaIngredientesComponent.ingredientes;
      this.calculadoraComponent.ingredientes = ingredientes;
      this.calculadoraComponent.calcularValores();
  
      console.log('Botón Continuar presionado', this.nombrePlatillo, this.tipoElaboracion);
    }
}
