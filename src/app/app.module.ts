import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { BookTableComponent } from './book-table/book-table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpdateBookFormComponent } from './update-book-form/update-book-form.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddNewBookComponent,
    FrontPageComponent,
    BookTableComponent,
    NavBarComponent,
    UpdateBookFormComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
