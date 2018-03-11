import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css', './quiz.responsive.component.css'],
})
export class QuizComponent {

  showFormResult(): void {
    document.querySelector('div.form-result').classList.add('show-result');
  }

  hideFormResult(): void {
    document.querySelector('div.form-result').classList.remove('show-result');
  }
}