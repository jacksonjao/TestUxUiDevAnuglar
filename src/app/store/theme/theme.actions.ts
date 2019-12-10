import {Action} from '@ngrx/store';

export const SET_THEME = '[THEME] Save Dark theme';
export const UNSET_THEME = '[THEME] Remove Dark theme';

export class SetThemeAction implements Action {
  readonly type = SET_THEME;
  constructor(public theme: string) {
  }
}

export class UnsetThemeAction implements Action {
  readonly type = UNSET_THEME;
  constructor() {
  }
}

export type themeActions =  SetThemeAction | UnsetThemeAction;
