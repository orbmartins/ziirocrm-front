import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmUserExclusionDialogComponent } from '../../../shared/confirm-userexclusion-dialog/confirm-userexclusion-dialog.component';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent implements OnInit {
  users: any[] = [];
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {
    this.seoService.setTitle('Usuários');
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.http.get<any[]>('http://localhost:8080/api/users').subscribe({
      next: (data) => (this.users = data),
      error: (err) => {
        this.error = 'Erro ao carregar usuários';
        console.error(err);
      },
    });
  }

  editar(id: number) {
    this.router.navigate(['/usuarios/editar', id]);
  }

  excluir(id: number) {
    const dialogRef = this.dialog.open(ConfirmUserExclusionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:8080/api/users/${id}`).subscribe({
          next: () => this.carregarUsuarios(),
          error: (err) => {
            this.error = 'Erro ao excluir usuário';
            console.error(err);
          }
        });
      }
    });
  }

}
