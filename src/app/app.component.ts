import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemsList = "anything"
  counter = 0;
  warning = "";

  incrementCount(){
    this.warning = "";
    this.counter = this.counter+1
  }
  decrementCount(){
    if(this.counter==0){
      this.warning = "Can't got less than 0";
    }else{
      this.counter = this.counter-1
    }
  }

  addItems(){
    this.itemsList = "something"
  }
  addItemsChange(){
    this.itemsList = "fewthings"
  }

}
