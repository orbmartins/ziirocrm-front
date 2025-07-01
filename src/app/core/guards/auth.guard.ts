import { inject } from '@angular/core';
import { CanActivateFn,Router,} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  // Se não estiver logado, redireciona para o login
  router.navigate(['/login']);
  return false;
};