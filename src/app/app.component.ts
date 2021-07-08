import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number>;

  constructor(private store: Store<any>) {
    this.counter$ = store.select('counterState');
  }

  increment(): void {
    this.store.dispatch({type: INCREMENT});
  }

  decrement(): void {
    this.store.dispatch({type: DECREMENT});
  }

}
