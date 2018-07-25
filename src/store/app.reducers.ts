import { ActionReducerMap, Store } from '@ngrx/store';
import * as CatDataStore from '../store/catState/catDataReducer';
import { Cat } from './catState/catData.action';

export interface AppState {
  catState: Cat;
}

export const reducers: ActionReducerMap<AppState> = {
  catState: CatDataStore.catDataReducer
};

const getStoredValue = (store: Store<AppState>) => {
  let state;
  const storeSubscription = store.subscribe(data => state = data);
  storeSubscription.unsubscribe();
  return state;
};

export const getCatState = (store: Store<AppState>) => {
  return getStoredValue(store).catState;
};
