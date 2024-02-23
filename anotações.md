Serve para verificar a versão do npm instalada.

```
npm --version
```

O `npm` é o gerenciador de pacotes, o `install` pode ser abreviado para `i`. O parâmetro `-g` instala globalmente. O `@angular/cli` é o pacote que instala o Angular CLI.

```bash
npm install -g @angular/cli
```

Para verificar se o angular foi devidamente instalado use `ng --help`.

```bash
ng --help
```

Para criar um projeto angular use o comando `ng new` seguido do nome do projeto.

```bash

ng new nome-do-projeto
```

Nesse caso foi escolhido o pré-processador de CSS `less`. 

A primeira coisa a ser inicializada e o `angular.json`, ele tem todas as configurações do projeto angular.

O `tsconfig.json` serve para configurar algumas particularidades do typescript e o ano do javascript que será utilizado.

O `tsconfig.app.json` indica onde estão os arquivos typescript. Ele escolhe bootstrap da aplicação.

O `tsconfig.spec.json` é o arquivo de configuração do typescript para os testes.

Todo arquivo `.spec.ts` é um arquivo de teste.

Dentro do `angular.json` tem geralmente na linha 36, a chamada `server` que indica onde o servidor será inicializado. Mais afundo verifica-se que o servidor é inicializado dentro de `src/main.server.ts`. Verificando esse arquivo ve-se que tem um componente chamado `AppComponent` que é o componente principal da aplicação. Esse é o componente que dará o botsrap da aplicação.

Lembrando que é possível alterar o servidor/nome/rota da aplicação.

Para rodar a aplicação angular, dentro do diretório do projeto, use o comando `ng serve`.

```bash
ng serve
```

A página padrão pode ser encontrada em `angular.json` dentro de `index:`, por padrão é `src/index.html`.

Quando alterações são feitas é necessário reiniciar o servidor, para isso use `ctrl + c` e depois `ng serve` novamente.

Entretando passando como parâmetro `--watch` o servidor irá reiniciar automaticamente.

```bash
ng serve --watch
```

É seguido geralmente o seguinte padrão de projeto:

Services = Funções, métodos e coisas em comum com toda aplicação

Layout = Componentes que são comuns a todos

Pipes = Pipelines em comum a todos

Models = Models em geral

Components = Componentes especificos em geral.

    - Dentro de components pode ser criado uma pasta para dividir componentes em categorias

---

Componentes são partes especificas do projeto.

