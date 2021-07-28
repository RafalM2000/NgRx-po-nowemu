import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { plus, minus } from './counter.actions';

export interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number>;


  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
  }

  increment(): void {
    this.store.dispatch(plus());
  }

  decrement(): void {
    this.store.dispatch(minus());
  }
}

