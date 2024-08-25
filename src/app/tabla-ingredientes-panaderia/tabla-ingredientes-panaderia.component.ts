import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-ingredientes-panaderia',
  templateUrl: './tabla-ingredientes-panaderia.component.html',
  styleUrls: ['./tabla-ingredientes-panaderia.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TablaIngredientesPanaderiaComponent {
  @Input() formControl!: FormControl;

  ingredientes: any[] = [
    { ingrediente: 'Harina', porcentaje: 100, peso: 0, unidad: '', costoKilo: 0, costoReceta: 0, isEditable: false }
  ];

  mostrarMensaje: boolean = true;  // Variable para controlar la visibilidad del mensaje

  agregarFila() {
    this.ingredientes.push({ ingrediente: '', porcentaje: 0, peso: 0, unidad: '', costoKilo: 0, costoReceta: 0, isEditable: false });
  }

  eliminarFila() {
    if (this.ingredientes.length > 1) {
      this.ingredientes.pop();
    } else if (this.ingredientes[0].ingrediente === 'Harina') {
      this.ingredientes[0] = { ingrediente: '', porcentaje: 0, peso: 0, unidad: '', costoKilo: 0, costoReceta: 0, isEditable: true };
    }
  }

  modificarPorcentaje(ingrediente: any) {
    if (ingrediente.ingrediente === 'Harina') {
      ingrediente.isEditable = true;
    }
  }

  onUnidadChange(index: number) {
    const ingrediente = this.ingredientes[index];
    ingrediente.pesoHabilitado = !!ingrediente.unidad;  // Habilita el campo de peso si hay unidad seleccionada
  }

  onPesoChange(index: number) {
    const ingrediente = this.ingredientes[index];
    
    if (ingrediente.peso > 0) {
      this.mostrarMensaje = false;  // Oculta el mensaje si el peso es mayor que 0
    }

    this.calcularCostoReceta(index);
  }

  calcularCostoReceta(index: number) {
    const ingrediente = this.ingredientes[index];
    
    if (!ingrediente.unidad) {
      ingrediente.costoReceta = 0;
      return;
    }

    const pesoEnKilogramos = this.convertirAKilogramos(ingrediente.peso, ingrediente.unidad);
    ingrediente.pesoEnKilogramos = pesoEnKilogramos;

    const harina = this.ingredientes.find(i => i.ingrediente === 'Harina');
    const pesoHarinaEnKilogramos = this.convertirAKilogramos(harina.peso, harina.unidad);

    this.ingredientes.forEach((ing, i) => {
      if (i !== 0 && ing.pesoEnKilogramos > 0 && pesoHarinaEnKilogramos > 0) {
        ing.porcentaje = Math.round((ing.pesoEnKilogramos / pesoHarinaEnKilogramos) * harina.porcentaje);
        if (ing.porcentaje < 1) {
          ing.porcentaje = 1;
        }
      }
    });

    if (ingrediente.ingrediente && pesoEnKilogramos > 0 && ingrediente.costoKilo > 0) {
      ingrediente.costoReceta = pesoEnKilogramos * ingrediente.costoKilo;
    } else {
      ingrediente.costoReceta = 0;
    }
  }

  convertirAKilogramos(peso: number, unidad: string): number {
    switch (unidad) {
      case 'kg':
      case 'gr':
      case 'lt':
      case 'ml':
        return peso;  // Tratar gr, ml, lt como si fueran kg, sin conversión
      default:
        return peso;
    }
  }
}
