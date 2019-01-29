import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookProvider } from '../providers/book.provider';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';
import { NewBookComponent } from './new-book/new-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';

const material = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTableModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewBookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    material,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BookProvider
  ],
  exports: [
    material
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
