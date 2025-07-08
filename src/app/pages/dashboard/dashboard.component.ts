import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
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
  error: string = '';
  oportunidadesCount: number = 0;
  atendimentosCount: number = 0;
  usuariosCount: number = 0;
  oportunidades: any[] = [];

  constructor(
    private seoService: SeoService,
    private http: HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.seoService.setTitle('Dashboard');
    this.getAtendimentosCount();
    this.getOportunidadesCount();
    this.getUsuariosCount();
    this.carregarOportunidades();
  }

  getOportunidadesCount(): void {
    this.http.get<any[]>('http://localhost:8080/api/oportunidades').subscribe({
      next: (data) => {
        this.oportunidadesCount = data.length;
      },
      error: (err) => {
        this.error = 'Erro ao carregar oportunidades';
        console.error(err);
      },
    });
  }

  getAtendimentosCount(): void {
    this.http.get<any[]>('http://localhost:8080/api/oportunidades').subscribe({
      next: (data) => {
        this.atendimentosCount = data.reduce((total, oportunidade) => {
          return total + (oportunidade.atendimentos?.length || 0);
        }, 0);
      },
      error: (err) => {
        this.error = 'Erro ao carregar atendimentos';
        console.error(err);
      },
    });
  }

  getUsuariosCount(): void {
    this.http.get<any[]>('http://localhost:8080/api/users').subscribe({
      next: (data) => {
        this.usuariosCount = data.length;
      },
      error: (err) => {
        this.error = 'Erro ao carregar usuários';
        console.error(err);
      },
    });
  }

  carregarOportunidades() {
    this.http.get<any[]>('http://localhost:8080/api/oportunidades').subscribe({
      next: (data) => (this.oportunidades = data),
      error: (err) => {
        this.error = 'Erro ao carregar usuários';
        console.error(err);
      },
    });
  }

  editar(id: number) {
    this.router.navigate(['/oportunidades/editar', id]);
  }
}
