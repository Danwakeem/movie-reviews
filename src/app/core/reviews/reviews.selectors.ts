import { createSelector } from '@ngrx/store';
import { getReviewsState } from './reviews.reducer';

export const getHeader = createSelector(
  getReviewsState,
  (state) => state.header,
);

export const getTestLoader = createSelector(
  getReviewsState,
  (state) => state.loading.testLoading
);

export const getBannerImages = createSelector(
  getReviewsState,
  (state) => state.movieTitles
);
