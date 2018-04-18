import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent {
  render: boolean = true;

  constructor(private cdRef: ChangeDetectorRef) { }

  reRender(): void {
    this.render = false;
    this.cdRef.detectChanges();
    this.render = true;
  }
}
