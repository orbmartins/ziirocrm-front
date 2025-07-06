import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-logout-dialog',
  imports: [MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './confirm-logout-dialog.component.html',
  styleUrl: './confirm-logout-dialog.component.scss'
})
export class ConfirmLogoutDialogComponent {

}
