import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { BookTableComponent } from './book-table/book-table.component';
import { UpdateBookFormComponent } from './update-book-form/update-book-form.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {path: '', component:FrontPageComponent},
  {path: 'books', component:BookTableComponent},
  {path: 'updatebook', component:UpdateBookFormComponent},
  {path: 'addnewbook', component:AddNewBookComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
