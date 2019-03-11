import { Component, Input } from '@angular/core';
import { D2bGeneratorComponent } from './d2b-generator.component';
import { chartPie } from 'd2b';

@Component({
  selector: 'd2b-chart-pie',
  template: `<div class="ng-d2b-container" #container></div>`,
  styleUrls: ['./d2b-generator.component.scss']
})
export class D2bChartPieComponent extends D2bGeneratorComponent {
  @Input() generator = chartPie();

  constructor() {
    super();
  }
}
