export class ContributionDistributorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('contribution-distributor-app h1')).getText();
  }
}
