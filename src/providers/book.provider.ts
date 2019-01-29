import { Injectable } from '@angular/core';
import { BaseService } from '../app/base.service';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BookProvider extends BaseService {

  /**
   * @returns {BehaviorSubject<object>}
   * @memberof BookProvider
   */
  get_bookList(): BehaviorSubject<object> {
    const observers = new BehaviorSubject(null);
    this.getJSON('books.json')
      .subscribe((data: any) => {
        observers.next(data);
      }, (error: any) => {
        observers.next(error);
      });
    return observers;
  }
}
