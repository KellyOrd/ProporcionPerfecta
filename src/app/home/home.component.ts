import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { TablaIngredientesComponent } from '../tabla-ingredientes/tabla-ingredientes.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, TablaIngredientesComponent, CalculadoraComponent]  // Incluir CommonModule en los imports
})
export class HomeComponent {
  nombrePlatillo: string = '';
  tipoElaboracion: string = '';

  touchedNombrePlatillo: boolean = false;
  touchedTipoElaboracion: boolean = false;

  @ViewChild(TablaIngredientesComponent) tablaIngredientesComponent!: TablaIngredientesComponent;
  @ViewChild(CalculadoraComponent) calculadoraComponent!: CalculadoraComponent;

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
