import { Action } from '@ngrx/store';

export const SET_CAT_DATA = 'SET_CAT_DATA';

export interface Cat {
  name: string;
  dob: string;
}

export class SetCatData implements Action {
  readonly type = SET_CAT_DATA;
  constructor(public payload: Cat) { }
}

export type CatActions = SetCatData;
