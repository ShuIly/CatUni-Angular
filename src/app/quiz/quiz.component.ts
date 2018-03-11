import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css', './quiz.responsive.component.css'],
})
export class QuizComponent {
  @ViewChild('formResult') 
  private formResult: ElementRef;

  showFormResult(): void {
    this.formResult.nativeElement.classList.add('show-result');
  }

  hideFormResult(): void {
    this.formResult.nativeElement.classList.remove('show-result');
  }
}