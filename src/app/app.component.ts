import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    new Quote(1,'"Those who dare to fail miserably can achieve greatly."','By John .F. Kennedy',new Date(1945,5,27)),
    new Quote(2,'"Get busy living or get busy dying."','By Stephen King',new Date(1983,4,25)),
    new Quote(3,'"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams."','By Dr.Suess',new Date(1990,7,19)),
    new Quote(4,'"Life is what happens when you are busy making other plans"','John Lennon',new Date(1979,9,23)),
    new Quote(5,'"A stone is heavy, sandy is weighty but a fools wrath is heavier than the two combined"','By Boyd TM',new Date(2018,10,18)),
  ]
// constructor(){
//
//   this.quotes = ["A stone is heavy, sandy is weight but a fools wrath is heavier than the two combined","The higher you go the cooler it becomes"];
// }
}
