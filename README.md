# Boas vindas ao exercício Testando Assincronismo no React Redux

---

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto. Para isso, siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- Após fazer o fork, clone o repositório criado no seu computador.

- Rode o `npm install`.

- Vá para a branch main do seu projeto e execute o comando `git branch`

- Mude para a branch para realização do exercício com o comando `git checkout -b exercicio`. É nessa branch que você realizará a solução para o exercício.

- Observe o que deve ser feito nas instruções.

</details><br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />

- Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master.

⚠ **Atenção!** Quando for criar o PR você se deparará com a seguinte tela:

![PR do exercício](images/example-pr.png)

- É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

- Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/exercise-pokemon-card`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

- Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

➡ Para cada PR realize esse mesmo processo.

</details><br />

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Este repositório contém uma aplicação funcional, que utiliza uma [API de JSONS aleatória](https://jsonplaceholder.typicode.com/posts) e traz um título e descrição aleatório.

Seu objetivo nesse exercício de fixação é utilizar todos os aprendizados sobre testes assíncronos para garantir que aplicações em React com Redux funcionem corretamente.

- Para implementar os seus testes, edite o arquivo `./tests/App.test.js`, que se encontra dentro da pasta src, na raiz do projeto. Você deverá fazer algumas implementações antes de começar os testes:
  - O **mock** do retorno da [API](https://jsonplaceholder.typicode.com/posts) no arquivo /src/tests/mocks/randomJSON.js
  - O *mock* da função *fetch*, no arquivo `/src/tests/mocks/mockFetch.js`;
    *Se preferir, pode realizar o mock do fetch direto no ambiente de testes.
  - A função `renderWithRedux`, no arquivo `src/helpers/renderWithRedux.js`.

- Ler, entender a aplicação e saber o que testar também é parte do exercício.

</details><br />

<details>
  <summary><strong>🛠️ Executando os testes</strong></summary><br />

- Para rodar os testes, execute o comando:

```bash
npm run test
```

</details><br />

**Divirta-se codando!** 🚀

---

# Exercícios de Fixação

Todos os testes dos exercícios de fixação deverão ser implementados no arquivo `./src/App.test.js`.

Garanta que você entendeu a implementação da aplicação antes de realizar os testes.

**Dica 1:** Sua primeira ação deve ser construir a função renderWithRedux, mockar o retorno da API e criar um mock do fetch.
  * Caso faça o mock do fetch num arquivo separado, não esqueça de atribuir ao objeto **global.fetch** o seu mock.

**Dica 2:** Parte do requisito consiste em você consegui fazer seu teste esperar o texto "Carregando..." sumir da tela. Pense em como você faria isso!
  >**Dica bonus**: (você pode usar o `waitForElementToBeRemoved()`);

## Exercício 1

Neste exercício você deverá testar se assim que a aplicação começa, há apenas uma mensagem de "Carregando..." na tela

<details>
  <summary>Testes que deverão ser feitos: </summary>

1. Teste se o fetch ainda não foi chamado;
2. Teste se existe a mensagem de 'Carregando...' na tela.

</details>

## Exercício 2

Neste exercício você deverá testar se a aplicação faz uma requisição para exibir as mensagens aleatórias na tela

<details>
  <summary>Testes que deverão ser feitos: </summary>

1. Teste se o fetch é chamado apenas uma vez ao carregar a página;
2. Teste se o fetch foi chamado utilizando a URL correta: `https://jsonplaceholder.typicode.com/posts`

</details>

## Exercício 3

Neste exercício você fará os testes básicos para verificar se a renderização é feita corretamente.

<details>
  <summary>Testes que deverão ser feitos: </summary>

1. Teste se os 10 primeiros cards possuem o *title* e o *body* iguais ao retorno da sua API, e se a chave `data` possue a mesma informação.

</details>
