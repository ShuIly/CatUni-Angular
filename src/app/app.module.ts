import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutesModule } from './routes.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
