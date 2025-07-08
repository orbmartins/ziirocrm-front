import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserCreateComponent } from './pages/users/create-user/create-user.component';
import { UserEditComponent } from './pages/users/edit-user/edit-user.component';
import { OportunidadesListComponent } from './pages/oportunidades/oportunidades-list/oportunidades-list.component';
import { OportunidadesCreateComponent } from './pages/oportunidades/oportunidades-create/oportunidades-create.component';
import { OportunidadesEditComponent } from './pages/oportunidades/oportunidades-edit/oportunidades-edit.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { 
      title: 'Login'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    data: { 
      title: 'Dashboard'
    }
  },
  {
    path: 'usuarios',
    component: UsersListComponent,
    canActivate: [authGuard],
    data: { 
      title: 'Usuários'
    }
  },
  {
    path: 'usuarios/criar-usuario',
    component: UserCreateComponent,
    canActivate: [authGuard],
    data: { 
      title: 'Novo Usuário'
    }
  },
  {
    path: 'usuarios/editar/:id',
    component: UserEditComponent,
    canActivate: [authGuard],
    data: { 
      title: 'Editar Usuário'
    }
  },
  {
    path: 'oportunidades',
    component: OportunidadesListComponent,
    canActivate: [authGuard],
    data: { 
      title: 'Oportunidades'
    }
  },
  {
    path: 'oportunidades/criar-oportunidade',
    component: OportunidadesCreateComponent,
    canActivate: [authGuard],
    data: { 
      title: 'Nova Oportunidade'
    }
  },
  {
    path: 'oportunidades/editar/:id',
    component: OportunidadesEditComponent,
    canActivate: [authGuard],
    data: { 
      title: 'Editar Oportunidade'
    }
  },
];