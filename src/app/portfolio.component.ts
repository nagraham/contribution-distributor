import { Component } from '@angular/core';
// import { Portfolio } from './portfolio';

@Component({
  selector: 'manage-portfolio',
  template: '<h2>{{name}}</h2>'
})

export class PortfolioComponent {
  name: "Hello Portfolio!"
  // portfolio: PORTFOLIOS[0];
  //
  // var PORTFOLIOS: Portfolio [
  //   { id: 1, name: "Alex's Awesome Portfolio", owner: "Alex"},
  //   { id: 2, name: "Sam's Super Portfolio", owner: "Sam"}
  // ];
}
