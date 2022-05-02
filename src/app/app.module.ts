import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbutilityService } from './dbutility.service';
import { HomepageComponent } from './homepage/homepage.component';
import { InsertComponent } from './insert/insert.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    InsertComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DbutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
