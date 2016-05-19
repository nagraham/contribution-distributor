import { ContributionDistributorPage } from './app.po';

describe('contribution-distributor App', function() {
  let page: ContributionDistributorPage;

  beforeEach(() => {
    page = new ContributionDistributorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('contribution-distributor works!');
  });
});
