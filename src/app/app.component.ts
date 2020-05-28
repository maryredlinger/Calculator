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
  addNums () {
      let one = +this.numOne
      let two = +this.numTwo

      this.total = one + two
  };
  subtractNums () {
      this.total = this.numOne - this.numTwo
  };

  divideNums () {
      this.total = this.numOne / this.numTwo
  };

}
