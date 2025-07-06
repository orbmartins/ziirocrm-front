import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmLogoutDialogComponent } from '../confirm-logout-dialog/confirm-logout-dialog.component';

@Component({
  selector: 'app-user-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss'
})

export class UserNavComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
  ) { }


  logout() {
    const dialogRef = this.dialog.open(ConfirmLogoutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
