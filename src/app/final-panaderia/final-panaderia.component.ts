import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final-panaderia',
  standalone: true,
  imports: [CommonModule], // <-- Combina los módulos aquí
  templateUrl: './final-panaderia.component.html',
  styleUrls: ['./final-panaderia.component.css'], // <-- Cambié "styleUrl" a "styleUrls" (error tipográfico)
})
export class FinalPanaderiaComponent {
  showCreditsModal = false;
  showPrivacyPolicyModal = false;

  openCredits() {
    this.showCreditsModal = true;
  }

  closeCredits() {
    this.showCreditsModal = false;
  }

  showPrivacyPolicy(event: Event) {
    event.preventDefault(); // Previene que el enlace cause un reload de la página
    this.showPrivacyPolicyModal = true;
  }

  closePrivacyPolicy() {
    this.showPrivacyPolicyModal = false;
  }
}
