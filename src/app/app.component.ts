import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { plus, minus, name } from './counter.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

export interface AppState {
  counter: number;
  counterName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dataFormModel: FormGroup;
  counter$: Observable<number>;

  constructor(nameForm: FormBuilder, private store: Store<AppState>) {
    this.counter$ = store.select('counter');

    this.dataFormModel = nameForm.group({
      counterName: ['']
    });

    this.dataFormModel.get('counterName').valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe (
      value => {
        console.log(value);
        store.dispatch(name({ counterName: value }));
      }
   );
  }

  increment(): void {
    this.store.dispatch(plus());
  }
  decrement(): void {
    this.store.dispatch(minus());
  }
}

