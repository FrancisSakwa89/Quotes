import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes = [
  new Quote(1,'Those who dare to fail miserably can achieve greatly.'),
  new Quote(2,'Get busy living or get busy dying.'),
  new Quote(3,'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.'),
  new Quote(4,'Life is what happens when you are busy making other plans'),
  new Quote(5,'A stone is heavy, sandy is weight but a fools wrath is heavier than the two combined'),
]

// constructor(){
//
//   this.quotes = ["A stone is heavy, sandy is weight but a fools wrath is heavier than the two combined","The higher you go the cooler it becomes"];
// }
}
