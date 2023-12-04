import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css',
})
export class OperacionesComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      this.resultado = NaN; // Manejo de división por cero
    }
  }
}
