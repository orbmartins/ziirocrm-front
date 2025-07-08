import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oportunidades-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './oportunidades-create.component.html',
  styleUrl: './oportunidades-create.component.scss'
})

export class OportunidadesCreateComponent {
  nome = '';
  email = '';
  telefone = '';
  empresa = '';
  status = 'Novo';
  observacoes = '';
  success = false;
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  onSubmit() {
    const newOportunidade = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      empresa: this.empresa,
      status: this.status,
      observacoes: this.observacoes
    };

    this.http.post('http://localhost:8080/api/oportunidades', newOportunidade).subscribe({
      next: () => {
        this.nome = '';
        this.email = '';
        this.telefone = '';
        this.empresa = '';
        this.observacoes = '';
        this.success = true;
        this.error = '';
        this.router.navigate(['/oportunidades']);
      },
      error: (err) => {
        this.success = false;
        this.error = 'Erro ao cadastrar oportunidade.';
        console.error(err);
      },
    });
  }

}
