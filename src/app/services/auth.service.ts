import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  // Mock function to get user role; replace with actual logic
  getUserRole(): string {
    // This should ideally come from your backend or authentication logic
    return 'admin'; // or 'student' or 'company'
  }
}
