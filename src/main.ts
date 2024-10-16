import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import routes from app.routes
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// The routes are already defined in app.routes.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Use the imported routes here
}).catch(err => console.error(err));
