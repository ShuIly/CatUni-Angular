import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    QuizComponent,
    FormComponent,
  ],
  imports: [CommonModule],
  exports: [RouterModule]
})

export class QuizModule { }