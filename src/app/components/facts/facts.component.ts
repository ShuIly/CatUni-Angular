import { Component, OnInit } from '@angular/core';
import { FactService } from '../../../services/facts/fact.service';
import { Fact } from '../../../services/facts/fact';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  fact: Fact;
  text: JSON;

  constructor(private factService: FactService) {
    this.fact = new Fact('Waiting...', 20);
  }

  ngOnInit() {
    this.getFact();
  }

  getFact() {
    this.factService.reqFact()
      .subscribe(fact => this.text = fact);
  }
}
