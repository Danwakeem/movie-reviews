import { Action } from '@ngrx/store';

export enum ReviewsActionTypes {
  TEST = '[Reviews] Test',
  TEST_SUCCESS = '[Reviews] Test SUCCESS',
}

export class Test implements Action {
  readonly type = ReviewsActionTypes.TEST;
  constructor(public payload?: any) {}
}
export class TestSuccess implements Action {
  readonly type = ReviewsActionTypes.TEST_SUCCESS;
  constructor(public payload?: any) {}
}

export type All =
  | Test
  | TestSuccess;
