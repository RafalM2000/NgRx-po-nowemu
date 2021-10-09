import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CounterService } from './counter.service';

@Injectable()
export class CounterEffects {

  loadCounters$ = createEffect(() => this.actions$.pipe(
    ofType('[App Page] Load Counters'),
    mergeMap(() => this.countersService.getConterNames('aaaa')
      .pipe(
        map(counters => ({ type: '[Counter API] Counters Loaded Success', payload: counters })),
        catchError(() => EMPTY)
      ))
     )
    );

  constructor(
    private actions$: Actions,
    private countersService: CounterService
  ) {}
}
