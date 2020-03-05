<div align="center">
  <img src="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2">
</div>

<h1 align="center">
  Teste do <a href="https://www.mercadolivre.com.br/" target="_blank">Mercado Livre</a> para Desenvolvedor Front-End
</h1>

### Startando o projeto

Primeiro clone o projeto: `git clone https://github.com/RBritoX/Meli-Test`

Em seguida execute os comandos abaixo para startar o Back-End:

```sh
$ cd backend
$ yarn
$ yarn dev
```

Agora, em outra aba/janela do terminal, execute os comandos abaixo para startar o Front-End:

```sh
$ cd frontend
$ yarn
$ yarn start
```

Agora abra o navegador e acesse `localhost:3000`

---

### :memo: Back-End

O Back-End foi construído com Node.js para acessar a [API do Mercado Livre](https://api.mercadolibre.com/sites/MLA/search?q=) e disponibilizar os dados de busca, lista de produtos e detalhes dos produtos para o Front-End.

**:file_folder: Controllers:**

- SearchController
<br>Acessa a busca e as categorias para disponibilizar para o Front.

- ItemController
<br>Acessa o detalhe dos produtos para disponibilizar para o Front.

**:file_folder: Services**
- Api
<br>Acessa a API do Mercado Livre.

**:file_folder: Util**
- Name
<br>Formata o nome dos produtos.


**:wrench: Recursos**

- Node.js
- Express
- Axios
- Cors
- Eslint
- Prettier
- EditorConfig

---

### :memo: Front-End

O Front-End foi construído com React.js para consumir a [API do Mercado Livre](https://api.mercadolibre.com/sites/MLA/search?q=) através do Back-End e renderizar as páginas e funcionalidades solicitadas.

**:file_folder: Components:**
- Header
<br>Acessa e busca da API.

- Category
<br>Acessa e exibe a categoria dos produtos.

- Loading
<br>Renderiza o loading.

**:file_folder: Pages:**
- Home
<br>Página principal, onde só exibe o Header.

- ProductList
<br>Renderiza a lista de produtos de acordo com a pesquisa feita na busca.

- Product
<br>Renderiza o detalhe do produto que foi selecionado na lista pesquisada.

**:file_folder: Services:**
- Api
<br>Acessa a API do Mercado Livre através da porta disponibilizada pelo Back-End.

- History
<br>Acessa a história do Router no App.js.

**:file_folder: Styles:**
- Colors
<br>Exporta as cores usada no projeto.

- Global
<br>Define o estilo global da aplicação.


**:wrench: Recursos**

- React.js
- Styled-components
- React-icons
- React-dom
- React-router-dom
- Axios
- History
- Polished
- Prop-types

:crossed_fingers:

---

Feito por [Raphael Brito](https://www.linkedin.com/in/raphaellbrito/) (RBritoX)
