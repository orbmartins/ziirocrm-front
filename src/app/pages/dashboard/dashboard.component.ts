import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  users: any[] = [];
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
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
    if (confirm('Tem certeza que deseja excluir?')) {
      this.http.delete(`http://localhost:8080/api/users/${id}`).subscribe({
        next: () => this.carregarUsuarios(),
        error: (err) => {
          this.error = 'Erro ao excluir usuário';
          console.error(err);
        },
      });
    }
  }
}