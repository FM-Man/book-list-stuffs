import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Book } from '../Book';

@Component({
  selector: 'app-update-book-form',
  templateUrl: './update-book-form.component.html',
  styleUrls: ['./update-book-form.component.css']
})


export class UpdateBookFormComponent implements OnInit {

  constructor(private bookService: BookServiceService, private router:Router) { }

  givenBook = this.bookService.getUpdateBook()

  ngOnInit(): void {
  }

  saveClick() : void {
    this.bookService.updateBook(this.givenBook);
    console.log(this.givenBook);
    this.router.navigate(['books']);
  }

}
