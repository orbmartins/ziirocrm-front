import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class UserEditComponent implements OnInit {
  user: any;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8080/api/users/${id}`).subscribe({
      next: (data) => (this.user = data),
      error: (err) => {
        this.error = 'Erro ao carregar usuário';
        console.error(err);
      },
    });
  }

  onSubmit() {
    this.http.put(`http://localhost:8080/api/users/${this.user.id}`, this.user).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => {
        this.error = 'Erro ao atualizar usuário';
        console.error(err);
      },
    });
  }
}