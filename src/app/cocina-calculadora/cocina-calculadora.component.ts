import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FinalComponent } from '../final/final.component';

@Component({
  selector: 'app-cocina-calculadora',
  templateUrl: './cocina-calculadora.component.html',
  styleUrls: ['./cocina-calculadora.component.css'],
  standalone: true,
  imports: [
    HomeComponent,
    NavbarComponent,
    FinalComponent
  ]
})

export class CocinaCalculadoraComponent {

  generatePDF() {
    const button = document.querySelector('.botones') as HTMLElement;
    const finalContent = document.querySelector('app-final') as HTMLElement;
    
    if (button) button.style.display = 'none';
    if (finalContent) finalContent.style.display = 'none';
  
    setTimeout(() => {
      const data = document.getElementById('contentToConvert')!;
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
  
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        let position = 0;

        // Añadir la primera página
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        
        // Configuración de la marca de agua diagonal repetitiva
        const fontSize = 50;  // Tamaño de la fuente
        const watermarkText = "PROPORCIÓN PERFECTA";
        pdf.setFontSize(fontSize);
        pdf.setTextColor('#4b3621'); // Color café oscuro
        pdf.setFont('Helvetica', 'bold'); // Fuente en negrita
        pdf.setDrawColor(255, 255, 255); // Color blanco para el trazo
        pdf.setLineWidth(0.5); // Grosor del trazo

        // Coordenadas y ángulo para la marca de agua diagonal
        const angle = 45; // Ángulo de inclinación
        const spacingX = 150; // Espacio horizontal entre las repeticiones del texto
        const spacingY = 100; // Espacio vertical entre las repeticiones del texto

        for (let x = -imgWidth; x < imgWidth * 2; x += spacingX) {
          for (let y = -pageHeight; y < pageHeight * 2; y += spacingY) {
            pdf.text(watermarkText, x, y, {
              angle: angle,
              align: 'center',
              renderingMode: 'fillThenStroke'
            });
          }
        }

        heightLeft -= pageHeight;
  
        // Añadir más páginas si es necesario
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
          
          // Repetir la marca de agua en cada página adicional
          for (let x = -imgWidth; x < imgWidth * 2; x += spacingX) {
            for (let y = -pageHeight; y < pageHeight * 2; y += spacingY) {
              pdf.text(watermarkText, x, y, {
                angle: angle,
                align: 'center',
                renderingMode: 'fillThenStroke'
              });
            }
          }

          heightLeft -= pageHeight;
        }
  
        pdf.save('calculadora.pdf');
  
        if (button) button.style.display = 'block';
        if (finalContent) finalContent.style.display = 'block';
      });
    }, 100);
  }
}
