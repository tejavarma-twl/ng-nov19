import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome Team for angular!';
  title2 = "Yes its good!"
  sampletext = "<a href='#'>This is property binding</a>"

  callaFun(){
    alert("ok")
  }
}
