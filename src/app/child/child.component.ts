import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.component';
import { zero } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [`$childHeaderColor: #ff00e0;
    h3 { color: $childHeaderColor }`]
})
export class ChildComponent implements OnInit {
  counterJunior$: Observable<number>;
  counterName$: Observable<string>;

  constructor(private store: Store<AppState>) {
  this.counterJunior$ = store.select('counter');
  this.counterName$ = store.select('counterName');
}
  ngOnInit(): void {
    setInterval(() => this.store.dispatch(zero()), 5000);
  }
}

