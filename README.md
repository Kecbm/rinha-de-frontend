<h1 id="top" align="center">Visualizador de JSON 📄</h1>

<h2>Sumário:</h2>

- [O que foi desenvolvido](#summary)
- [Tecnologias utilizadas](#tech)
- [Executar o projeto](#execute)
- [Minhas considerações durante o desenvolvimento](#considerations)

<h5>👉 Clique nos tópicos com seta a direita para expandir o conteúdo</h5>

---

<h2 id="summary">O que foi desenvolvido 👩‍💻</h2>

<br>

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

<details><summary>Estilização 🎨</summary>

Comentar quais recursos visuais que utilizei na página

Fontes: Nunito e Roboto (ver elementos e tamanhos da fonte)

Cores:
#efefef
#d9d9d9
#c3c3c3
#333333
#000000
#818181

Tipos de cursor: default, pointer e not-allowed

Icones: pasta aberta no input de enviar arquivo, lixeira no botão de limpar o conteúdo

Emojis: bandeira dos paises referentes aos idiomas disponíveis na aplicação (inglês, espanhol e português) e coração no footer

outline: para marcar o contepudo que está sendo focado pela navegação do usuário

</details>

<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<h2 id="tech">Documentação 📕</h2>

<br>

Documentar passo a passo de como utilizar a aplicação; Gravar um GIF de cada etapa

<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<h2 id="tech">Tecnologias utilizadas 🛠</h2>

<br>

<img title="React" alt="React" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> <img title="CSS" alt="CSS" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />  <img title="HTML" alt="HTML" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> <img title="JavaScript" alt="JavaScript" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          
<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

<h2 id="execute">Executar o projeto 💻</h2>

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

<h2 id="considerations">Minhas considerações durante o desenvolvimento 📝</h2>

Comentar quais foram os desafios encontrados e o que eu priorizei solucionar.

OBS.: Não consegui, até então, instalar o Es Lint no projeto pois deu vários erros que não consegui resolver.

<br>

<p align="right"><a href="#top">Voltar ao topo ☝</a></p>

---

Projeto desenvolvido por [Klecianny Melo](https://www.linkedin.com/in/kecbm/) 😁
