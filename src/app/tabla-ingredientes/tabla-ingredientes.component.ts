import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-ingredientes',
  templateUrl: './tabla-ingredientes.component.html',
  styleUrls: ['./tabla-ingredientes.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TablaIngredientesComponent {
  @Input() formControl!: FormControl;

  ingredientes: any[] = [
    { ingrediente: '', peso: 0, unidad: 'kg', costoKilo: 0, costoReceta: 0 }
  ];

  agregarFila() {
    this.ingredientes.push({ ingrediente: '', peso: 0, unidad: 'kg', costoKilo: 0, costoReceta: 0 });
  }

  eliminarFila() {
    if (this.ingredientes.length > 1) {
      this.ingredientes.pop();
    }
  }

  calcularCostoReceta(index: number) {
    const ingrediente = this.ingredientes[index];
    if (ingrediente.ingrediente && ingrediente.peso > 0 && ingrediente.costoKilo > 0) {
      ingrediente.costoReceta = ingrediente.peso * ingrediente.costoKilo;
    } else {
      ingrediente.costoReceta = 0;
    }
  }
}
