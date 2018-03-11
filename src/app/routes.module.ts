import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule { }

