import { createReducer, on } from '@ngrx/store';
import { plus, minus, zero } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState, 
    on(plus, (state) => state +1),
    on(minus, (state) => state -1),
    on(zero, (state) => state = 0)
    );
    
    export function counterReducer(state, action) {
        return _counterReducer(state, action);
      }
    