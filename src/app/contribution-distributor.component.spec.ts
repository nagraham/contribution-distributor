import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ContributionDistributorAppComponent } from '../app/contribution-distributor.component';

beforeEachProviders(() => [ContributionDistributorAppComponent]);

describe('App: ContributionDistributor', () => {
  it('should create the app',
      inject([ContributionDistributorAppComponent], (app: ContributionDistributorAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'contribution-distributor works!\'',
      inject([ContributionDistributorAppComponent], (app: ContributionDistributorAppComponent) => {
    expect(app.title).toEqual('contribution-distributor works!');
  }));
});
