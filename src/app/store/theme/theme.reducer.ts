import * as fromTheme from './theme.actions';
export interface ThemeState {
  name: string;
}

const initialState: ThemeState = {
  name: 'default-theme'
};

export function themeReducer(state = initialState, action: fromTheme.themeActions): ThemeState {
  switch (action.type) {
    case fromTheme.SET_THEME:
      return {
        ...state,
        name: action.theme
      };

    case fromTheme.UNSET_THEME:
      return {
        ...initialState,
      };
    default :
      return state;
  }
}
