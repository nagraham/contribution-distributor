import { Component } from '@angular/core';
import { PortfolioComponent } from './portfolio';

@Component({
  moduleId: module.id,
  directives: [PortfolioComponent],
  selector: 'contribution-distributor-app',
  templateUrl: 'contribution-distributor.component.html',
  styleUrls: ['contribution-distributor.component.css']
})

export class ContributionDistributorAppComponent {
  title = 'Contribution Distributor';
}
