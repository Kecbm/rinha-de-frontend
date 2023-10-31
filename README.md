<h1 id="top" align="center">Visualizador de JSON 📄</h1>

<h2>Sumário:</h2>

- O que foi desenvolvido
- Documentação
- Tecnologias utilizadas
- Executar o projeto
- Minhas considerações durante o desenvolvimento

<h5>👉 Clique nos tópicos com seta a direita para expandir o conteúdo</h5>

---

<h2>O que foi desenvolvido 👩‍💻</h2>

<br>

![Minha solução para a Rinha de Frontend](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/3.View.gif)

O **Visualizador de JSON** é uma aplicação frontend desenvolvida com as seguintes tecnologias: `React`, `HTML`, `CSS` e `JavaScript`. Na aplicação, você pode carregar um arquivo JSON e visualizar seu conteúdo diretamente na tela. Se o arquivo JSON for inválido, a aplicação exibirá uma mensagem de erro, fornecendo informações sobre o problema.

Para arquivos JSON de tamanho considerável, o tempo de renderização do conteúdo pode aumentar. Nesses casos, a aplicação exibirá um componente de carregamento para indicar que o conteúdo está sendo processado. Isso garante uma experiência mais suave para os usuários, mesmo com arquivos grandes.

Uma característica essencial desta aplicação é a capacidade de escolher entre três idiomas disponíveis: _inglês_, _espanhol_ e _português_. Isso permite que os usuários acessem a aplicação no idioma de sua preferência, tornando-a mais inclusiva.

Além disso, o **Visualizador de JSON** foi projetado com recursos de acessibilidade. É compatível com leitores de tela, facilitando a navegação e compreensão para usuários com deficiências visuais. Além disso, a aplicação pode ser facilmente navegada usando a tecla Tab no teclado, garantindo que todos os elementos sejam acessíveis a partir do teclado. Tornando a aplicação amigável para todos os usuários.
<br>

<details><summary>Desenvolvimento 🎯</summary>

A aplicação foi cuidadosamente desenvolvida, com foco na usabilidade e na eficiência. Algumas das principais características do desenvolvimento incluem:

- **React JSON View**: Utilizei a biblioteca [React JSON View](https://www.npmjs.com/package/react-json-view) para criar uma visualização imersiva e amigável do JSON diretamente na tela, tornando a experiência de visualização mais eficiente;

- **Acessibilidade Prioritária**: Um dos principais desafios foi garantir que a aplicação fosse acessível a todos. Implementei recursos, como rótulos ARIA e descrições alternativas, para melhorar a experiência de usuários com deficiências visuais e necessidades de navegação assistida;

- **Otimização de Desempenho**: Reconheõ a importância de uma renderização rápida, especialmente ao lidar com arquivos grandes. Implementei otimizações para garantir que o conteúdo seja processado e exibido o mais rapidamente possível, tornando a interação com a aplicação mais ágil.

O objetivo é oferecer uma experiência de alta qualidade aos usuários, garantindo que a acessibilidade e o desempenho estejam no centro do desenvolvimento.

</details>

<details><summary>Acessibilidade ♿️</summary>

Minha preocupação com a acessibilidade se reflete em uma série de recursos cuidadosamente implementados para garantir que os usuários tenham a melhor experiência possível:

- **Rótulos ARIA**: Utilizei aria-label, aria-labelledby e aria-describedby para fornecer informações e contextos significativos para elementos, tornando a navegação mais compreensível para leitores de tela;

- **Textos Alternativos**: Implementei atributos alt em imagens para descrever seu conteúdo, beneficiando usuários que não podem visualizar as imagens;

- **Navegação por Teclado**: O uso aprimorado do atributo tabindex permite uma navegação mais eficiente da página usando apenas o teclado;

- **Multilíngue**: A página pode ser traduzida para três idiomas: português, inglês e espanhol, garantindo que os usuários possam escolher o idioma de sua preferência;

- **Feedback para Erros**: Implementei mensagem de erro para indicar quando um arquivo inválido é enviado, ajudando os usuários a entenderem o problema;

- **Experiência Ininterrupta**: Um ícone de carregamento será renderizado na tela enquanto o conteúdo do arquivo é processado, tornando a espera mais clara e menos frustrante para todos;

- **Interatividade Melhorada**: Alterei as cores dos elementos em resposta aos eventos de hover e clique, tornando a experiência mais dinâmica e interativa;

- **Botão Inteligente**: Adotei uma lógica que desabilita o botão quando não há conteúdo na tela, habilitando-o automaticamente quando o conteúdo está disponível, melhorando a usabilidade geral da página.

</details>

<details><summary>Otimização 🔧</summary>

Visando proporcionar a melhor experiência aos usuários ao visualizar arquivos JSON na tela, adotei uma abordagem de _otimização_. Para alcançar o menor tempo de renderização possível, desativei alguns recursos da biblioteca React JSON View:

- **Habilitação da Área de Transferência (Clipboard)**: A funcionalidade de copiar para a área de transferência foi desativada para minimizar a carga de processamento.

- **Exibição de Tamanho de Objetos**: A página não exibe o tamanho dos objetos, pois isso pode gerar um aumento no tempo de renderização.

- **Exibição de Tipos de Dados**: Desativei a exibição dos tipos de dados, o que ajuda a simplificar o processo de renderização.

- **Exibição de Chaves de Arrays**: Também optei por não exibir as chaves dos arrays, o que contribui para um carregamento mais rápido.

Com essas otimizações, conseguimos alcançar o menor tempo de renderização na tela, garantindo que os usuários desfrutem de uma experiência ágil ao visualizar arquivos JSON na aplicação.

</details>

<details>
<summary>Estilização 🎨</summary>

Os recursos visuais aplicados na página são:

- **Fontes**:
  - Utilizei as fontes Nunito e Roboto em diferentes tamanhos para melhorar a legibilidade:
      - Select: 18px
      - Título: 36px
      - Descrição: 20px
      - Textos: 20 ou 18px
      - Botão: 18px
      - Título: 36px

- **Cores**:
  - Selecionei cores que proporcionam uma experiência agradável ao usuário:
      - #efefef
      - #d9d9d9
      - #c3c3c3
      - #333333
      - #000000
      - #818181

- **Tipos de Cursor**:
  - Implementei três tipos de cursor para fornecer feedback visual:
      - Padrão (default)
      - Apontador (pointer)
      - Não permitido (not-allowed)

- **Ícones**:
  - Integrei ícones para melhorar a usabilidade:
      - Utilizei um ícone de pasta aberta no campo de envio de arquivo.
      - Adicionei um ícone de lixeira no botão de limpar conteúdo.

- **Emojis**:
  - Introduzi emojis representando as bandeiras dos países relacionados aos idiomas disponíveis na aplicação (inglês, espanhol e português).
  - No rodapé, adicionei um emoji de coração para um toque amigável.

- **Esquema de Contorno**:
  - Implementei contornos visuais para destacar o elemento atualmente focado durante a navegação do usuário.

Esses recursos de estilização foram aplicados cuidadosamente para aprimorar a estética e a usabilidade da aplicação.

</details>

<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<h2>Documentação 📕</h2>

<br>

**Acessando a Aplicação Passo a Passo**

Vou detalhar como acessar a aplicação, passo a passo:

- **Escolhendo o Idioma**:

A primeira funcionalidade do site permite que você escolha o idioma exibido, com opções em _Inglês_, _Espanhol_ e _Português_.
Para fazer isso, clique no texto correspondente ao idioma desejado (por exemplo, Português) e selecione sua preferência. A página será traduzida automaticamente para o idioma escolhido.

Veja o exemplo abaixo:

![Selecionando o idioma do site](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/2.Language.gif)

- **Visualizando um Arquivo JSON**:

Na aplicação, você pode selecionar um arquivo JSON e visualizar seu conteúdo na tela.
Para fazer isso, clique no texto Insira o arquivo JSON aqui, o que abrirá as pastas do seu dispositivo.
Basta selecionar o arquivo JSON que deseja visualizar.

- **Limpando o Conteúdo**:

Após visualizar o conteúdo do arquivo, o botão Limpar conteúdo será ativado. Clicando nele, você limpa o conteúdo da tela.

Veja o exemplo abaixo:

![Visualizando o conteúdo de um arquivo JSON](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/3.View.gif)

- **Arquivo JSON Inválido**:

Se você selecionar um arquivo inválido, receberá uma mensagem de erro indicando o problema, como mostrado abaixo:

![Arquivo JSON inválido](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/4.Error.gif)

- **Carregamento de Arquivo Grande**:

Quando você seleciona um arquivo grande, um componente visual aparece na tela, indicando que o conteúdo está sendo carregado. Isso permite uma experiência tranquila durante o carregamento do arquivo, como ilustrado abaixo:

![Loading do arquivo JSON](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/5.Loading.gif)

Esses passos simples garantem uma navegação eficaz na aplicação, permitindo que você aproveite ao máximo seus recursos.

<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<h2>Tecnologias utilizadas 🛠</h2>

<br>

<img title="React" alt="React" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> <img title="CSS" alt="CSS" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />  <img title="HTML" alt="HTML" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> <img title="JavaScript" alt="JavaScript" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          
<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<h2>Executar o projeto 💻</h2>

<br>

<details><summary>Aplicação React 🎉</summary>

Para clonar o projeto, instalar as dependências e iniciar a aplicação `React`, execute os comandos na ordem a seguir:

```bash
  git clone https://github.com/Kecbm/rinhadefrontend.git
```

```bash
  cd rinhadefrontend
```

```bash
  npm install
```

```bash
  npm start
```

</details>

<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<h2>Minhas considerações durante o desenvolvimento 📝</h2>

<br>

<details><summary>ESlint 👔</summary>

Durante o processo de desenvolvimento, encontrei um desafio com a inicialização do ESlint na aplicação, que resultou no seguinte erro:

![Erro na inicialização do ESlint](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/1.EsLint.png)

Apesar de ter realizado diversas tentativas de resolução, não obtive sucesso em solucionar esse problema 🙁

</details>

<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<h2>Próximos passos 📝</h2>

Visando oferecer um Software de melhoria continua, considerando o ciclo do desenvolvimento MVP (Produto Mínimo Viável) onde é realizada a análise do retorno dos clientes a cada nova entrega e ajustes nas funcionalidades existentes ou desenvolvimentos de novas funcionalidades, a seguir listo uma série de etapas futuras a serem realizadas no projeto, o que forma um backlog do produto. Sinta-se a vontade para contribuir com essa lista.

<br>

- [ ] Escrever testes para a aplicação;
- [ ] Desenvolvimento de uma estrutura de select de idiomas personalizada;
- [ ] Adição de novas propriedades de acessibilidade;
- [ ] Responsividades para dispositivos com telas pequenas e médias;
- [ ] Transformar a home em uma página da aplicação;
- [ ] Adicionar mais informações ao footer;
- [ ] Desenvolver estilização para página Not Found;

<br>

<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<p align="center">Projeto desenvolvido por <a href="https://www.linkedin.com/in/kecbm/" target="_blank" rel="noopener noreferrer">Klecianny Melo</a> 😁</p>
