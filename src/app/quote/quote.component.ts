import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Those who dare to fail miserably can achieve greatly.','By John .F. Kennedy'new Date(1990,4,19)),
    new Quote(2,'Get busy living or get busy dying.','By Stephen King',new Date(1938,8,13)),
    new Quote(3,'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.','By Dr.Suess',new Date(1973,7,19)),
    new Quote(4,'Life is what happens when you are busy making other plans','John Lennon',new Date(1996,5,17)),
    new Quote(5,'A stone is heavy, sandy is weight but a fools wrath is heavier than the two combined','By Boyd',new Date(2018,9,18)),
  ]

  toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }
  constructor() { }
  ngOnInit() {
  }

}
