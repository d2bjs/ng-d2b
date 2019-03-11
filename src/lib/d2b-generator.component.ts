import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { id as idGenerator, chartAxis } from 'd2b';
import { select } from 'd3';
import { D2bEvent } from './d2b-event';

@Component({
  selector: 'd2b-generator',
  template: `<div class="ng-d2b-container" #container></div>`
})
export class D2bGeneratorComponent implements OnChanges, OnInit, OnDestroy {
  id = null;

  @ViewChild('container') container: ElementRef;
  @Output() beforeRender = new EventEmitter<D2bEvent>();
  @Output() rendered = new EventEmitter<D2bEvent>();
  @Input() data: any;
  @Input() duration = 500;
  @Input() generator = chartAxis();
  @Input() config = (ctx: D2bEvent) => {};

  constructor() {
    this.id = idGenerator();
  }

  ngOnInit() {
    select(window).on(`resize.d2b-generator-${this.id}`, () => this.updateDefer());
  }

  ngOnDestroy() {
    select(window).on(`resize.d2b-generator-${this.id}`, null);
  }

  ngOnChanges() {
    this.update();
  }

  update(options = {skipTransition: false}) {
    this.beforeRender.emit(this.eventContext);

    this.config(this.eventContext);

    const el = select(this.container.nativeElement).datum(this.data);
    const elTransition = options.skipTransition ? el : el.transition().duration(this.duration);

    elTransition.call(this.generator);

    this.rendered.emit(this.eventContext);
  }

  updateNow() {
    this.update({skipTransition: true});
  }

  updateDefer() {
    setTimeout(() => this.updateNow(), 0);
  }

  get eventContext() {
    return {
      container: this.container,
      generator: this.generator,
      data: this.data
    };
  }

}
