import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReviewsActionTypes } from './reviews.actions';
import * as reviews from './reviews.actions';

@Injectable()
export class ReviewsEffects {
  constructor(
    private store: Store<any>,
    private actions: Actions
  ) {}

  @Effect()
  test$: Observable<Action> = this.actions.pipe(
    ofType(ReviewsActionTypes.TEST),
    map(({payload}: reviews.Test) => new reviews.TestSuccess({
      message: payload ? payload : 'Hello There',
    }))
  );
}
