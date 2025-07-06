import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-app-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss'
})

export class AppNavComponent {
  constructor(
    private authService: AuthService, 
    public router: Router
  ) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  
}
