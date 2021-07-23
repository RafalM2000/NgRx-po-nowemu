import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [`$childHeaderColor: #ff00e0;
    h3 { color: $childHeaderColor }`]
})
export class ChildComponent implements OnInit {
  counterJunior$: Observable<number>;

  constructor(private store: Store<AppState>) {
  this.counterJunior$ = store.select('counter');
}

  ngOnInit(): void {
    setInterval(() => this.store.dispatch({type: 'ZERO'}), 5000);
  }

}
