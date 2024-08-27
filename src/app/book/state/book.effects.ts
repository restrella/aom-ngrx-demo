import { Injectable } from '@angular/core';
import { BookService } from '../services/book.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookActions, setBookList } from './book.actions';
import { map, merge, mergeMap } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BookEffects {
  constructor(private action$: Actions, private bookService: BookService) {}

  getBooks$ = createEffect(() => {
    return this.action$.pipe(
      ofType(BookActions.GET_BOOK_LIST),
      mergeMap((data: { payload: string }) =>
        this.bookService
          .getBooks()
          .pipe(map((books) => ({ type: BookActions.SET_BOOK_LIST, books })))
      )
    );
  });

  addBooks$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(BookActions.ADD_BOOK_API),
        mergeMap((data: { type: string; payload: Book }) =>
          this.bookService
            .addBook(data.payload)
            .pipe(map((book) => ({ type: BookActions.ADD_BOOK_STATE, book })))
        )
      );
    }
    // { dispatch: false }
  );
}
