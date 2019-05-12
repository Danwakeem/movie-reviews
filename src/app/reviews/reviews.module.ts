import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReviewsEffects } from '../core/reviews/reviews.effects';
import { reviewsReducer } from '../core/reviews/reviews.reducer';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    SharedModule,
    StoreModule.forFeature('reviews', reviewsReducer),
    EffectsModule.forFeature([ReviewsEffects]),
  ],
})
export class ReviewsModule { }
