import { Component } from '@angular/core';

@Component({
  selector: 'app-check-lunch',
  standalone: false,
  templateUrl: './check-lunch.component.html',
  styleUrl: './check-lunch.component.css'
})
export class CheckLunchComponent {

  lunchItems: string = '';
  message: string = ''; 
  messageColor: string = 'green'; 

  checkLunch(): void {
    const items = this.lunchItems.split(',').filter((item) => item.trim() !== '');

    if (this.lunchItems.trim() === '') {
      this.message = 'Please enter data first';
      this.messageColor = 'red'; 
    } else if (items.length <= 3) {
      this.message = 'Enjoy!';
      this.messageColor = 'green';
    } else {
      this.message = 'Too much!';
      this.messageColor = 'red';
    }
  }
}
