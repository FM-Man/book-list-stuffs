import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BookServiceService } from '../book-service.service';


@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  constructor(private bookSevice : BookServiceService, private router: Router) { }

  books = this.bookSevice.getBooks();
  ngOnInit(): void {
    console.log("okay");
  }

  Delete (book : Book) : void {
    console.log(book);
    this.books = this.bookSevice.deleteBook(book);
  }

  Update (givenBook : Book, index:number) : void {
    this.bookSevice.setUpdateBook(givenBook, index);
    this.router.navigate(['updatebook']);
  }

}
