import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numOne: string;
  numTwo: string;
  total = null

  //numOne(event) {console.log(event.target.value);}

  multiplyNums () {
      this.total = this.numOne * this.numTwo
  };

}
