import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  private messageSource = new BehaviorSubject<string>('Karma');
  currentMessage = this.messageSource.asObservable();

  constructor() {
    const latestCat = localStorage.getItem('category');
    if (latestCat) {
      this.changeMessage(latestCat);
    }
  }

  changeMessage(message: string) {
    console.log('CategoryService: ' + message);
    localStorage.setItem('category', message);
    this.messageSource.next(message);
  }
}
