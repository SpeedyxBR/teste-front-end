# Teste Econverse: Vaga Desenvolvedor Front-End

## Projeto

Este projeto é uma vitrine de produtos desenvolvida em React e TypeScript, seguindo o layout proposto pela Econverse. O objetivo é demonstrar habilidades em componentização, responsividade, boas práticas de código e atenção a detalhes visuais.

### Deploy

O projeto está disponível em produção via Vercel:

👉 [Acesse a aplicação online](https://teste-front-end-git-main-andrel-devs-projects.vercel.app)

---

## Principais Funcionalidades

- **Vitrine de Produtos:** Exibição dinâmica de produtos mockados, simulando consumo de API.
- **Carrossel Responsivo:** Navegação por setas, com layout adaptável para desktop e mobile.
- **Modal de Detalhes:** Ao clicar em um produto, abre-se um modal com informações detalhadas.
- **Componentização:** Uso de componentes reutilizáveis para cards, botões, carrossel, etc.
- **Estilização:** Utilização de Tailwind CSS e SASS para customização visual e responsividade.
- **Boas práticas:** Estrutura de código clara, tipagem com TypeScript, uso de hooks customizados.

## Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```
3. Rode o projeto:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. Acesse em [http://localhost:5173](http://localhost:5173) (ou porta indicada no terminal).

## Estrutura de Pastas

- `src/components`: Componentes reutilizáveis (ProductCard, Modal, UI, etc)
- `src/screens/Home`: Página principal e seções (carrossel, banners, newsletter, etc)
- `src/hooks`: Hooks customizados (ex: useProducts)
- `src/types`: Tipos TypeScript
- `public/`: Imagens e assets

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- SASS (SCSS)

## Observações

- O layout foi seguido pixel a pixel conforme o Figma.
- O projeto não utiliza bibliotecas de UI prontas (Bootstrap, Material, etc).
- Produtos são mockados, mas a estrutura permite fácil integração com API real.
- O código está organizado para facilitar manutenção e escalabilidade.

---

## Instruções originais do teste

> _As instruções e critérios de avaliação originais da Econverse estão mantidos abaixo para referência._

...existing code...







# Teste Econverse: Vaga Desenvolvedor Front-End

### Vem ser #Econverse!

Segue abaixo as instruções para a execução do teste.

## Instruções
- Faça um fork desse projeto para a sua conta pessoal do GitHub.
- Desenvolva a página conforme as **Especificações Técnicas** 
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail ana.nascimento@econverse.com.br, joao.victor@econverse.com.br e eduardo.rodrigues@econverse.com.br com o título **Teste Vaga FrontEnd Jr**

## Especificações Técnicas
- Desenvolver a pagina em React e TypeScript conforme o [layout](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). Para conseguir pegar os elementos do Figma, basta copiar o layout para sua conta que terá acesso de edição.
- Montar a [vitrine](https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png) de produtos consumindo as informações dos produtos em json atraves desse [Link](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json).
- Desenvolver a interação ao clicar em um produto conforme layout. A interação consiste em abrir um modal com as principais informações do produto presente no arquivo [JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) conforme o produto que clicar.
- Utilizar Pré-processador Sass, Less ou Stylus.
- Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- Não Utilizar bibliotecas UI como Bootstrap, Foundation, ou afins.

## Pontos Extras
- Utilizar Boas práticas de SEO
- Uso de HTML semântico

## O que avaliaremos em seu teste
- Organização do projeto
- Lógica do código
- Componentização
- Alcance dos objetivos propostos

**Boa sorte! ;)**
