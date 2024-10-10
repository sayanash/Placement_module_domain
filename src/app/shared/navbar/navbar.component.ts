import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Correct import path

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  isAdmin(): boolean {
    return this.authService.getUserRole() === 'admin';
  }

  isStudent(): boolean {
    return this.authService.getUserRole() === 'student';
  }

  isCompany(): boolean {
    return this.authService.getUserRole() === 'company';
  }
}
