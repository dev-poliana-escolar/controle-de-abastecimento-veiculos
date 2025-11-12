import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  valor_litro : number = 0
  qtd_abastecido : number = 0
  dataAbastecimento: string = '';
  total: number = 0;
  tipoCombustivel: string = '';
  calcularTotal() {
    this.total = this.valor_litro * this.qtd_abastecido;
  }

  obterCombustivel() {
    switch (this.tipoCombustivel) {
      case 'gasolina': return 'Gasolina';
      case 'etanol': return 'Etanol';
      case 'diesel': return 'Diesel';
      default: return '';
    }
  }
}
