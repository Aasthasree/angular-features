import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-user-status',
  imports: [],
  templateUrl: './user-status.html',
  styleUrl: './user-status.scss'
})
export class UserStatus {

  firstName = signal('Aastha');
  lastName = signal('pradeep');

  fullName = computed(() => `${this.firstName()} +${this.lastName()}`);

   changeName() {
    this.firstName.set('Ananya');
    this.lastName.set('Verma');
  }

}
