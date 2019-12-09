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
  username = "Hello guys!"
  status = true
  fruits = []

  a = `asdasd   
  asdasdasd`;     //back ticks

  showhidebutton(){
    this.status = !this.status;
    this.fruits.push('mango');
    // if(this.status===true){
    //   this.status = false
    // }else{
    //   this.status = true
    // }
    
  }


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
