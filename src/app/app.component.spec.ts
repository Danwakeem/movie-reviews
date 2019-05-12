import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { configureTestSuite } from 'ng-bullet';
import { SharedModule } from '@shared/shared.module';
import { Store } from '@ngrx/store';
import { TestStore } from '@shared/testing/TestStore';

describe('AppComponent', () => {
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: Store, useClass: TestStore},
      ],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movie-reviews'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('movie-reviews');
  });
});
