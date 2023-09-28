import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './counter.actions';
import { State } from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count!: number;

  constructor(private store: Store<{ counter: State }>) {
    store.select('counter').subscribe((state) => {
      this.count = state.count;
    });
  }

  incrementCount() {
    this.store.dispatch(increment());
  }

  decrementCount() {
    this.store.dispatch(decrement());
  }
}
