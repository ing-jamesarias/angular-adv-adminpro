import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    
    var valorAux;
    if (this.progreso >= 100 && valor >= 0) {
      valorAux = 100;
    }else if (this.progreso <= 0 && valor <= 0) {
      valorAux = 0;
    }else{
      valorAux = this.progreso + valor;
    }

    this.progreso = valorAux;
    this.valorSalida.emit(this.progreso);
  }

  onChange(valor: number) {
    var valorAux;
     if (valor >= 100) {
      valorAux = 100;
    } else if (valor <= 0) {
      valorAux = 0;
    } else {
      valorAux = valor;
    } 
    this.progreso = valorAux;
    this.valorSalida.emit(valorAux);


  }

}
