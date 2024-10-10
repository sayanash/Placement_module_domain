import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';

import { AdminDashboardComponent } from './app/admin/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './app/student/student-dashboard/student-dashboard.component';
import { CompanyDashboardComponent } from './app/company/company-dashboard/company-dashboard.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'company-dashboard', component: CompanyDashboardComponent },
  { path: '', redirectTo: '/student-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/student-dashboard' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
