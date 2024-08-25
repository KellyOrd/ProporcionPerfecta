import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  standalone: true,
  imports: [CommonModule]  // Asegúrate de importar CommonModule aquí
})
export class FinalComponent {
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
