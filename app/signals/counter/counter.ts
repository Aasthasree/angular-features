import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
    console.log('Value incremented')
  }

  decrement() {
    this.count.set(this.count() - 1);
    console.log('Value decremented')
  }

}
