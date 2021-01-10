import { Component } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

  public labels1: string[]=['Pan','Refresco','tacos'];

  public data1: MultiDataSet = [
    [60, 300, 200],
  ];
  
}
