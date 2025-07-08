import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { appRoutes } from './app.routes';
import { provideRouter } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    importProvidersFrom(MatDialogModule, MatButtonModule, BrowserModule),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};