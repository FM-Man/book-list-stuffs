import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  books:Book[] = [
    {name:"Physics", author:"idkhkhs", year:2015, availability:true},
    {name:"Mathmatics", author:"idkhkhs", year:2014, availability:true},
    {name:"Chemistry", author:"idkhkhs", year:2015, availability:true},
    {name:"Biology", author:"idkhkhs", year:2014, availability:true},
    {name:"Politics", author:"idkhkhs", year:2020, availability:false},
    {name:"Sociology", author:"idkhkhs", year:2021, availability:false}
  ]

  bookToBeUpdated:Book = new Book();
  updateBookIndex : number = -1;

  constructor() { }

  getBooks() : Book[] {
    return JSON.parse(JSON.stringify(this.books));
  }

  deleteBook (givenBook: Book): Book[] {
    this.books = this.books.filter((book) => givenBook.name != book.name);
    return this.books;
  }

  updateBook(book:Book) : void {
    this.books.splice(this.updateBookIndex, 1, book);
  }

  addBook(book:Book) : void {
    this.books.push(book);
  }

  setUpdateBook(setBook: Book, index:number): void {
    this.bookToBeUpdated = setBook;
    this.updateBookIndex = index
  }

  getUpdateBook() : Book {
    return this.bookToBeUpdated;
  }
}
