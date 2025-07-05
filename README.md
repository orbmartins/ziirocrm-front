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
  app/
    core/
      guards/
        auth.guard.ts
        auth.guard.spec.ts
      interceptors/
        auth.interceptor.ts
        auth.interceptor.spec.ts
      services/
        auth.service.ts
        auth.service.spec.ts
    pages/
      dashboard/
        dashboard.component.ts
        dashboard.component.html
        dashboard.component.scss
      home/
        home.component.ts
        home.component.html
        home.component.scss
      login/
        login.component.ts
        login.component.html
        login.component.scss
      user-create/
        user-create.component.ts
        user-create.component.html
        user-create.component.scss
      users/
        create-user/
          create-user.component.ts
          create-user.component.html
          create-user.component.scss
        edit-user/
          edit-user.component.ts
          edit-user.component.html
          edit-user.component.scss
    shared/
      navbar.component.ts
      navbar.component.html
      navbar.component.scss
    app.component.ts
    app.component.html
    app.component.scss
    app.config.ts
    app.routes.ts
  assets/
  styles.scss
  main.ts
  index.html
```

- **Guards**: Proteção de rotas (ex: autenticação)
- **Interceptors**: Interceptação de requisições HTTP (ex: token JWT)
- **Services**: Serviços de autenticação e outros
- **Pages**: Componentes de página (Dashboard, Home, Login, Cadastro/Edição de Usuário)
- **Shared**: Componentes compartilhados (Navbar)

## Rotas

- `/` - Página inicial (Home)
- `/login` - Tela de login
- `/dashboard` - Dashboard (protegido por autenticação)
- `/usuarios/cadastrar` - Cadastro de usuário (protegido)
- `/usuarios/editar/:id` - Edição de usuário (protegido)

## Autenticação

O login armazena o token JWT no `localStorage` e utiliza um interceptor para enviar o token nas requisições autenticadas.

## Observações

- O backend ([https://github.com/orbmartins/ziirocrm-back](https://github.com/orbmartins/ziirocrm-back)) deve estar rodando em `http://localhost:8080` para autenticação e listagem de usuários.
- As variáveis de cor e estilos globais estão em `src/styles.scss`.

---

Gerado com [Angular CLI](https://angular.dev/tools/cli)
