import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [BookListComponent],
  imports: [CommonModule, BookRoutingModule],
})
export class BookModule {}
