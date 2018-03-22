import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Question } from '../../../../services/questions/question';
import { QuestionService } from '../../../../services/questions/questions.service';

@Component({
  selector: 'app-form',
  providers: [QuestionService],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', './form-responsive.component.css']
})
export class FormComponent implements OnInit {
  questions: Question[];

  constructor(private questionsService: QuestionService) { }

  @ViewChild('formResult')
  private formResult: ElementRef;

  showFormResult(): void {
    this.formResult.nativeElement.classList.add('show-result');
  }

  hideFormResult(): void {
    this.formResult.nativeElement.classList.remove('show-result');
  }

  ngOnInit(): void {
    this.questions = this.questionsService.getAllQuestions();
  }
}