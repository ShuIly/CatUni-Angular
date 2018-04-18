import { Component, OnInit } from '@angular/core';
import { FactService } from '../../../../services/facts/fact.service';

@Component({
  selector: 'fact-content',
  templateUrl: './fact-content.component.html',
  styleUrls: ['./fact-content.component.css'],
})
export class FactContentComponent implements OnInit {
  baseUrl: string = 'https://cataas.com/cat?height=300';
  factImageUrl: string;
  factSpinnerName: string = 'fact-spinner';
  fact: string;
  loaded: boolean = false;

  constructor(
    private factService: FactService,
  ) { }

  ngOnInit() {
    this.getFact();
    this.reRenderImage();
  }

  getFact() {
    this.factService.reqFact()
      .subscribe(fact => this.fact = fact.value.joke);
  }

  reRenderImage() {
    this.factImageUrl = this.baseUrl + (+ new Date());
  }
}