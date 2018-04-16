import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NotFoundComponent } from './components/404-not-found/not-found.component';
import { FactsComponent } from './components/facts/facts.component';
import { FormComponent } from './components/quiz/form/form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'facts', component: FactsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [
  HomeComponent,
  AboutComponent,
  QuizComponent,
  FactsComponent,
  NotFoundComponent,
  FormComponent
];