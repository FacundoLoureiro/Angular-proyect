import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
