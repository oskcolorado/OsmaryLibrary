import { Component, OnInit } from '@angular/core';
import { BookProvider } from 'src/providers/book.provider';
import { MatTableDataSource } from '@angular/material';
declare const $: any;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList = new MatTableDataSource([]);
  displayedColumns: string[] = ['name', 'editorial', 'author', 'edition', 'delete'];
  countOpenModal = 0;

  constructor(
    private _book_provider: BookProvider
  ) { }

  ngOnInit() {
    // Enable Script
    this.modalDissmis();
    // Override the filterPredicate of our bookList
    this.bookList.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.author.toString().includes(filter);
    };
    // Get book lost
    this._book_provider.get_bookList().subscribe((data: any) => {
      if (data) {
        this.bookList.data = data;
      }
    });
  }

  /**
   * This method allows close the modal
   * @memberof BookListComponent
   */
  modalDissmis(): void {
    $('#exampleModal').on('hidden.bs.modal', (event: any) => {
      this.countOpenModal++;
    });
  }

  /**
   * This method allows add books
   * @param {*} book
   * @memberof BookListComponent
   */
  addBook(book: any): void {
    const bookListCopy = this.bookList.data.slice();
    bookListCopy.push(book.form);
    this.bookList.data = bookListCopy;
    $('#exampleModal').modal('hide');
  }

  deleteBook(index: any) {
    if (confirm('Are you sure you want to delete this book?')) {
      const bookListCopy = this.bookList.data.slice();
      bookListCopy.splice(index, 1);
      this.bookList.data = bookListCopy;
    }
  }

  applyFilter(filterValue: string) {
    this.bookList.filter = filterValue.trim().toLowerCase();
  }

}
