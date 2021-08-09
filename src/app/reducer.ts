import { AppState } from './app.component';
import { createReducer, on} from '@ngrx/store';
import { plus, minus, zero, name } from './counter.actions';

export const initialState: AppState = {
    counter: 0,
    counterName: ''
};

const mycounterReducer = createReducer(
    initialState,
    on(plus, (state) => ({...state, counter: state.counter + 1})),
    on(minus, (state) => ({...state, counter: state.counter - 1})),
    on(zero, (state) => ({...state, counter: 0})),
    on(name, (state, { counterName }) =>
    ({...state, counterName }))
    );
    
export function counterReducer(state, action): any {
        return mycounterReducer(state, action);
      }
