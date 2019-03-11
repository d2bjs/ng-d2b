import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChartAxisComponent } from './ng-chart-axis.component';

describe('NgChartAxisComponent', () => {
  let component: NgChartAxisComponent;
  let fixture: ComponentFixture<NgChartAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgChartAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChartAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
