import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';

  @Input() labels: Label[] = ['option-1', 'option-2', 'option-3'];

  @Input() data: MultiDataSet = [[350, 450, 100],];

  @Input() colors: Color[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }];

}
