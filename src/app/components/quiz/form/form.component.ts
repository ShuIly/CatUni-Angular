import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', './form.responsive.component.css']
})
export class FormComponent {
  public questions: Array<object>;

  @ViewChild('formResult') 
  private formResult: ElementRef;

  showFormResult(): void {
    this.formResult.nativeElement.classList.add('show-result');
  }

  hideFormResult(): void {
    this.formResult.nativeElement.classList.remove('show-result');
  }

  constructor() {
    this.questions = [
      {
        "name": "cat-love",
        "title": "Do you like cats?",
        "answers": ["Yes!", "No!", "Maybe?"]
      },
      {
        "name": "personality",
        "title": "What's your personality like?",
        "answers": ["Shy", "Energetic!", "Why am I doing this?"]
      },
      {
        "name": "dog-love",
        "title": "Do you like dogs?",
        "answers": ["No!", "No!", "Wait, there's only No's?"]
      }
    ]
  }
}