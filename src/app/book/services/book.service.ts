import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../state/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  env = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBooks() {
    console.log('calling getBooks');
    return this.http.get(`${this.env}/books`);
  }
  
  addBook(book: Book) {
    console.log('calling getBooks');
    return this.http.post(`${this.env}/books`, book);
  }
}
