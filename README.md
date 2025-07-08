# ziirocrm-front

Este projeto é um frontend Angular para o sistema ziiroCRM.

## Requisitos

- Node.js (recomendado: versão 18+)
- npm (recomendado: versão 9+)
- Angular CLI (`npm install -g @angular/cli`)

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/seu-usuario/ziirocrm-front.git
cd ziirocrm-front
npm install
```

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```sh
npm start
```

Acesse [http://localhost:4200](http://localhost:4200) no navegador. O app será recarregado automaticamente ao salvar arquivos.

## Build de Produção

Para gerar o build de produção:

```sh
npm run build
```

Os arquivos serão gerados em `dist/ziirocrm-front`.

## Testes Unitários

Para rodar os testes unitários com Karma:

```sh
npm test
```

## Estrutura do Projeto

```
src/
  index.html
  main.ts
  styles.scss
  app/
    app.component.html
    app.component.scss
    app.component.spec.ts
    app.component.ts
    app.config.ts
    app.routes.ts
    core/
      guards/
        auth.guard.spec.ts
        auth.guard.ts
      interceptors/
        auth.interceptor.spec.ts
        auth.interceptor.ts
      services/
    pages/
      dashboard/
      home/
      login/
      oportunidades/
      users/
    shared/
      app-nav/
      brand/
      confirm-logout-dialog/
      confirm-oportunidadeexclusion-dialog/
      confirm-userexclusion-dialog/
      sidebar/
      user-nav/
```

- **Guards**: Proteção de rotas (ex: autenticação)
- **Interceptors**: Interceptação de requisições HTTP (ex: token JWT)
- **Services**: Serviços de autenticação e outros
- **Pages**: Componentes de página (Dashboard, Home, Login, Cadastro/Edição de Usuário)
- **Shared**: Componentes compartilhados (Sidebar, Navegação, Brand, Dialogs)

## Rotas

- `/` - Página inicial (Home)
- `/login` - Tela de login
- `/dashboard` - Dashboard (protegido por autenticação)
- `/usuarios` - Listagem de usuários (protegido)
- `/usuarios/criar-usuario` - Cadastro de usuário (protegido)
- `/usuarios/editar/:id` - Edição de usuário (protegido)
- `/oportunidades` - Listagem de oportunidades (protegido)
- `/oportunidades/criar-oportunidade` - Cadastro de oportunidade (protegido)
- `/oportunidades/editar/:id` - Edição de oportunidade (protegido)

## Autenticação

O login armazena o token JWT no `localStorage` e utiliza um interceptor para enviar o token nas requisições autenticadas.

## Observações

- O backend ([https://github.com/orbmartins/ziirocrm-back](https://github.com/orbmartins/ziirocrm-back)) deve estar rodando em `http://localhost:8080` para autenticação e listagem de usuários.
- As variáveis de cor e estilos globais estão em `src/styles.scss`.

---

Gerado com [Angular CLI](https://angular.dev/tools/cli)