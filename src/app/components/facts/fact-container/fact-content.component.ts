import { Component, OnInit } from '@angular/core';
import { FactService } from '../../../../services/facts/fact.service';

@Component({
  selector: 'fact-content',
  templateUrl: './fact-content.component.html',
  styleUrls: ['./fact-content.component.css'],
})
export class FactContentComponent implements OnInit {
  baseUrl: string = 'https://cataas.com/cat?height=450&';
  factImageUrl: string;
  factSpinnerName: string = 'fact-spinner';
  fact: string;
  imageLoaded: boolean = false;
  factLoaded: boolean = false;

  constructor(
    private factService: FactService,
  ) { }

  ngOnInit() {
    this.getFact();
    this.changeImageStamp();
  }

  getFact() {
    this.factService.reqFact()
      .subscribe(res => { 
        this.fact = res.fact;
        this.factLoaded = true;
      });
  }

  changeImageStamp() {
    this.factImageUrl = this.baseUrl + (+ new Date());
  }
}