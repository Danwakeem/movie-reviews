import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getHeader } from '@store/reviews/reviews.selectors';
import { Test } from '@store/reviews/reviews.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  header$: Observable<string> = this.store.pipe(select(getHeader));

  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new Test());
  }

  clickTest() {
    this.store.dispatch(new Test('Yo Man'));
  }

}
