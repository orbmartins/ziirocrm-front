import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmOportunidadeExclusionDialogComponent } from '../../../shared/confirm-oportunidadeexclusion-dialog/confirm-oportunidadeexclusion-dialog.component';

@Component({
  selector: 'app-oportunidades-list',
  imports: [CommonModule],
  templateUrl: './oportunidades-list.component.html',
  styleUrl: './oportunidades-list.component.scss'
})

export class OportunidadesListComponent implements OnInit {
  oportunidades: any[] = [];
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarOportunidades();
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

  excluir(id: number) {
    const dialogRef = this.dialog.open(ConfirmOportunidadeExclusionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:8080/api/oportunidades/${id}`).subscribe({
          next: () => this.carregarOportunidades(),
          error: (err) => {
            this.error = 'Erro ao excluir usuário';
            console.error(err);
          }
        });
      }
    });
  }


}
