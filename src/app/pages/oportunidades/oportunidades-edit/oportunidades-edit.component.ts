import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-oportunidades-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './oportunidades-edit.component.html',
  styleUrl: './oportunidades-edit.component.scss'
})

export class OportunidadesEditComponent {
  oportunidade: any;
  error = '';
  atendimentos: any[] = [];
  novoAtendimento = {
    descricao: '',
    responsavel: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8080/api/oportunidades/${id}`).subscribe({
      next: (data) => (this.oportunidade = data),
      error: (err) => {
        this.error = 'Erro ao carregar oportunidade';
        console.error(err);
      },
    });

    const oportunidadeId = this.route.snapshot.params['id'];
    this.carregarAtendimentos(oportunidadeId); // novo
  }

  onSubmit() {
    this.http.put(`http://localhost:8080/api/oportunidades/${this.oportunidade.id}`, this.oportunidade).subscribe({
      next: () => this.router.navigate(['/oportunidades']),
      error: (err) => {
        this.error = 'Erro ao atualizar oportunidade';
        console.error(err);
      },
    });
  }

  carregarAtendimentos(oportunidadeId: number) {
    this.http.get<any[]>(`http://localhost:8080/api/oportunidades/${oportunidadeId}/atendimentos`)
      .subscribe({
        next: (data) => this.atendimentos = data,
        error: (err) => console.error('Erro ao carregar atendimentos', err)
      });
  }

  adicionarAtendimento(oportunidadeId: number) {
    this.http.post(`http://localhost:8080/api/oportunidades/${oportunidadeId}/atendimentos`, this.novoAtendimento)
      .subscribe({
        next: () => {
          this.novoAtendimento = { descricao: '', responsavel: '' };
          this.carregarAtendimentos(oportunidadeId);
        },
        error: (err) => console.error('Erro ao adicionar atendimento', err)
      });
  }
}
