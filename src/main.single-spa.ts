import { enableProdMode, NgZone } from '@angular/core';
import { Router, NavigationStart, provideRouter } from '@angular/router';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './app/empty-route/empty-route.component';

if (environment.production) {
  enableProdMode();
}
/*
 * @MICROFRONTEND
 *
 * Aplikacija turi būti sukuriama naudojant `singleSpaAngular` metodą.
 *
 * Pagrindinis aplikacijos komponentas pateikiamas kaip pirmas parametras
 * `bootstrapApplication` metodui. `providers` šiuo atveju yra aplikacijai
 * būtinų provider'ių masyvas ir gali būti praplėstas pagal aplikacijos
 * kūrėjų poreikius.
 */
const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        provideAnimations(),
        getSingleSpaExtraProviders(),
        provideRouter([{ path: '**', component: EmptyRouteComponent }]),
      ],
    });
  },
  template: '<rc-ses-app-root />',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
