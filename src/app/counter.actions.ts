import { createAction, props } from '@ngrx/store';

export const plus = createAction('[App Component] Plus');
export const minus = createAction('[App Component] Minus');
export const zero = createAction('[Child Component] Zero');

export const name = createAction(
    '[App Component] Name',
    props<{ counterName: string }>()
  );
