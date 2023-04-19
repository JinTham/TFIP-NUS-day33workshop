import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadingComponent } from './components/heading.component';
import { BoardComponent } from './components/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
