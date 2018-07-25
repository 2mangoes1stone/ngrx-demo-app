import * as Actions from './catData.action';

export const initialState: Actions.Cat = {
  name: null,
  dob: null
};

export function catDataReducer(state = initialState, action: Actions.CatActions) {
  switch (action.type) {
    case (Actions.SET_CAT_DATA):
      return {
        ...state,
        name: action.payload.name,
        dob: action.payload.dob
      };
    default:
      return state;
  }
}
