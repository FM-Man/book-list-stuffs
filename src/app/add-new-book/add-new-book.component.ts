import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  constructor(private bookService:BookServiceService, private router:Router) { }

  newBook : Book = new Book()

  ngOnInit(): void {
  }

  AddBook():void{
    console.log(this.newBook);
    this.bookService.addBook(this.newBook);
    this.router.navigate(['books']);
  }

}
