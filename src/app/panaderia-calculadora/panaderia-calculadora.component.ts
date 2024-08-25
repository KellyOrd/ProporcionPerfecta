import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { HomePanaderiaComponent } from '../home-panaderia/home-panaderia.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TablaIngredientesPanaderiaComponent } from '../tabla-ingredientes-panaderia/tabla-ingredientes-panaderia.component';
import { CalculadoraPanaderiaComponent } from '../calculadora-panaderia/calculadora-panaderia.component';
import { FinalPanaderiaComponent } from '../final-panaderia/final-panaderia.component';

@Component({
  selector: 'app-panaderia-calculadora',
  templateUrl: './panaderia-calculadora.component.html',
  styleUrls: ['./panaderia-calculadora.component.css'],
  standalone: true,
  imports: [
    HomePanaderiaComponent,
    NavbarComponent,
    TablaIngredientesPanaderiaComponent,
    CalculadoraPanaderiaComponent,
    FinalPanaderiaComponent
  ]
})
export class PanaderiaCalculadoraComponent {

  generatePDF() {
    // Ocultar el botón y el contenido final
    const button = document.querySelector('.botones') as HTMLElement;
    const finalContent = document.querySelector('app-final-panaderia') as HTMLElement;
  
    if (button) button.style.display = 'none';
    if (finalContent) finalContent.style.display = 'none';
  
    // Esperar un breve momento para asegurarse de que los elementos estén ocultos
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
        const fontSize = 30;  // Tamaño de la fuente
        const watermarkText = "PROPORCIÓN PERFECTA";
        pdf.setFontSize(fontSize);
        pdf.setTextColor(171, 151, 130); // Color #ab9782 en RGB (R:171, G:151, B:130)
        pdf.setFont('Helvetica', 'bold'); // Fuente en negrita
  
        // Coordenadas y ángulo para la marca de agua diagonal
        const angle = 45; // Ángulo de inclinación
        const spacingX = 100; // Espacio horizontal entre las repeticiones del texto
        const spacingY = 80; // Espacio vertical entre las repeticiones del texto
  
        for (let x = -imgWidth; x < imgWidth * 2; x += spacingX) {
          for (let y = -pageHeight; y < pageHeight * 2; y += spacingY) {
            pdf.text(watermarkText, x, y, {
              angle: angle,
              align: 'center'
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
                align: 'center'
              });
            }
          }
  
          heightLeft -= pageHeight;
        }
  
        // Guardar el PDF con la marca de agua
        pdf.save('calculadora.pdf');
  
        // Volver a mostrar el botón y el contenido final
        if (button) button.style.display = 'block';
        if (finalContent) finalContent.style.display = 'block';
      });
    }, 100);
  }
  
  }  