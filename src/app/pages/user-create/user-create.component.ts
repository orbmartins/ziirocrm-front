import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})

export class UserCreateComponent {
  name = '';
  email = '';
  password = '';
  success = false;
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:8080/api/users', newUser).subscribe({
      next: () => {
        this.success = true;
        this.error = '';
        this.name = '';
        this.email = '';
        this.password = '';
        // Você pode redirecionar se quiser:
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.success = false;
        this.error = 'Erro ao cadastrar usuário.';
        console.error(err);
      },
    });
  }
}
