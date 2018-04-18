import { Component, Input, OnInit, Output } from '@angular/core';
import { SpinnerService } from '../../../../services/spinners/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() name: string;
  @Input() show: boolean = false;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    if (!this.name) return new Error("Spinner must have a 'name' attribute.");

    this.spinnerService._register(this);
  }
}
