import { createFeatureSelector } from '@ngrx/store';
import { ReviewsActionTypes } from './reviews.actions';

class ReviewsState {
  loading: Record<string, boolean>;
  loaded: Record<string, boolean>;
  header: string;
  movieTitles: string[];
}

export const INITIAL_STATE: ReviewsState = {
  loading: {},
  loaded: {},
  header: 'Okay Then',
  movieTitles: [
    'assets/banner/img1.jpg',
    'assets/banner/img2.jpg',
    'assets/banner/img3.jpg',
    'assets/banner/img4.jpg',
  ],
};

export function reviewsReducer(
  state: ReviewsState = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case ReviewsActionTypes.TEST: {
      return {
        ...state,
        loading: {
          ...state.loading,
          testLoading: true,
        }
      };
    }
    case ReviewsActionTypes.TEST_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          testLoading: false,
        },
        header: action.payload.message,
      };
    }
    default: return state;
  }
}

export const getReviewsState = createFeatureSelector<ReviewsState>(
  'reviews'
);
