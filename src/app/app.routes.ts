import { Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { LearningComponent } from './navbar/learning/learning.component';
import { LoginComponent } from './navbar/login/login.component';
import { SignupComponent } from './navbar/signup/signup.component';
import { ContactusComponent } from './navbar/contactus/contactus.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'contact',component:ContactusComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];