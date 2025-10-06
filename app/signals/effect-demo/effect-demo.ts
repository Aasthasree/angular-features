import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect-demo',
  imports: [],
  templateUrl: './effect-demo.html',
  styleUrl: './effect-demo.scss'
})
export class EffectDemo {
  count = signal(0);

  constructor() {
    effect(()=> {
      console.log('count changed', this.count())
    })
  }

   increment() {
    this.count.set(this.count() + 1);
  }
}
