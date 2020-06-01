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

  multiplyNums () {
    let one = +this.numOne
    let two = +this.numTwo

    this.total = one * two
  };
  addNums () {
      let one = +this.numOne
      let two = +this.numTwo

      this.total = one + two
  };
  subtractNums () {
    let one = +this.numOne
    let two = +this.numTwo

    this.total = one - two
  };

  divideNums () {
    let one = +this.numOne
    let two = +this.numTwo

    this.total = one / two
  };

}
