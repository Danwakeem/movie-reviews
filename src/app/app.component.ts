import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getBannerImages } from '@store/reviews/reviews.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-reviews';
  bannerImages$ = this.store.pipe(select(getBannerImages));

  constructor(public store: Store<any>) {

  }
}
