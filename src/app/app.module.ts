import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { FactService } from '../services/facts/fact.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerService } from '../services/spinners/spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    RoutingComponents,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    FactService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
