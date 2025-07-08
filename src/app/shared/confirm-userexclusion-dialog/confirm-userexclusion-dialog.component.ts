import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-userexclusion-dialog',
  imports: [MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './confirm-userexclusion-dialog.component.html',
  styleUrl: './confirm-userexclusion-dialog.component.scss'
})

export class ConfirmUserExclusionDialogComponent {

}
