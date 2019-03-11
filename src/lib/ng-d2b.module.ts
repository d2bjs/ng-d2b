import { NgModule } from '@angular/core';
import { D2bChartAxisComponent } from './d2b-chart-axis.component';
import { D2bGeneratorComponent } from './d2b-generator.component';
import { D2bChartPieComponent } from './d2b-chart-pie.component';
import { D2bChartSunburstComponent } from './d2b-chart-sunburst.component';
import { D2bChartSankeyComponent } from './d2b-chart-sankey.component';

@NgModule({
  declarations: [D2bChartPieComponent, D2bChartSunburstComponent, D2bChartSankeyComponent, D2bChartAxisComponent, D2bGeneratorComponent],
  imports: [],
  exports: [D2bChartPieComponent, D2bChartSunburstComponent, D2bChartSankeyComponent, D2bChartAxisComponent, D2bGeneratorComponent]
})
export class NgD2bModule { }
