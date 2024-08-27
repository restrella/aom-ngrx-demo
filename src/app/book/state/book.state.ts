import { Book } from './book';

export interface BookState {
  books: ReadonlyArray<Book>;
}
