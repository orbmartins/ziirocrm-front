import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private titleSubject = new BehaviorSubject<string>(''); // título atual
  public title$ = this.titleSubject.asObservable();       // título como observable

  constructor(
    private title: Title
  ) {}

  setTitle(title: string) {
    this.title.setTitle(`${title} | ziiroCRM`);
    this.titleSubject.next(title);
  }
}