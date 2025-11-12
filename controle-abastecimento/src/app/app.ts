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
  resultado : boolean = false;


   validarCampos(): boolean {
    return (
      this.valor_litro > 0 &&
      this.qtd_abastecido > 0 &&
      this.dataAbastecimento.trim() !== '' &&
      this.tipoCombustivel.trim() !== ''
    );
  }

  calcularTotal() {
    if (this.validarCampos()) {
      this.total = this.valor_litro * this.qtd_abastecido;
      this.resultado = true;
    } else {
      alert('Preencha todos os campos antes de calcular.');
      this.resultado = false
    }
  }


  obterCombustivel() {
    switch (this.tipoCombustivel) {
      case 'gasolina': return 'Gasolina';
      case 'etanol': return 'Etanol';
      case 'diesel': return 'Diesel';
      default: return '';
    }
  }

  limparResultado() {
    this.resultado=false
  }
}
