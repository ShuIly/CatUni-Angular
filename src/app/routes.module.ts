import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizModule } from './components/quiz/quiz.module';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { QuizComponent } from './components/quiz/quiz.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'quiz', component: QuizComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
  ],
  imports: [RouterModule.forRoot(routes), QuizModule],
  exports: [RouterModule]
})

export class AppRoutesModule { }