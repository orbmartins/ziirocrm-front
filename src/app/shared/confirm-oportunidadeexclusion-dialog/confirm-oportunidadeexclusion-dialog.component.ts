import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-oportunidadeexclusion-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './confirm-oportunidadeexclusion-dialog.component.html',
  styleUrl: './confirm-oportunidadeexclusion-dialog.component.scss'
})

export class ConfirmOportunidadeExclusionDialogComponent {

}
