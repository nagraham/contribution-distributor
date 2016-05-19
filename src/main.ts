import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ContributionDistributorAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ContributionDistributorAppComponent);

