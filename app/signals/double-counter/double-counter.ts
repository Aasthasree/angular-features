import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-double-counter',
  imports: [],
  templateUrl: './double-counter.html',
  styleUrl: './double-counter.scss'
})
export class DoubleCounter {

  count = signal(2);
  double = computed(() => this.count() * 2)

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
  

}
