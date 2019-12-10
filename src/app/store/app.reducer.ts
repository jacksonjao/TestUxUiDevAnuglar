import {ActionReducerMap} from '@ngrx/store';
import {themeReducer, ThemeState} from './theme/theme.reducer';

export interface AppState {
  theme: ThemeState;
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
  theme: themeReducer
};
