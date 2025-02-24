# 🎓 Apresentação dos Alunos - Pós-Graduação UFG

Este projeto foi desenvolvido para exibir cards com as apresentações dos alunos da pós-graduação em **Sistemas e Agentes Inteligentes** da **Universidade Federal de Goiás (UFG)**. Cada card contém informações relevantes sobre o aluno, incluindo:

- **Nome**
- **Formação Acadêmica**
- **Área de Atuação**
- **Biografia**
- **Apresentação Pessoal**

O objetivo é criar uma interface intuitiva e organizada para que os alunos possam se apresentar e compartilhar suas experiências com a comunidade acadêmica.

## 🚀 Tecnologias Utilizadas

Este projeto foi criado utilizando o [Astro](https://astro.build/), um framework moderno para construção de sites rápidos e eficientes.

## 📁 Estrutura do Projeto

A estrutura do projeto segue a organização padrão de um projeto Astro:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   └── ProfileCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

## 🛠️ Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```

2. Acesse a pasta do projeto:

   ```sh
   cd nome-do-projeto
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

   O projeto estará disponível em **http://localhost:4321**.

## 📦 Comandos Úteis

| Comando                   | Ação                                           |
|---------------------------|-----------------------------------------------|
| `npm install`             | Instala as dependências                       |
| `npm run dev`             | Inicia o servidor local (`localhost:4321`)    |
| `npm run build`           | Gera os arquivos estáticos para produção      |
| `npm run preview`         | Pré-visualiza o site antes do deploy          |
| `npm run astro ...`       | Executa comandos da CLI do Astro              |
| `npm run astro -- --help` | Exibe ajuda sobre a CLI do Astro              |
