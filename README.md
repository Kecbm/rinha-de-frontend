<h1 id="top" align="center">JSON Viewer 📄</h1>

<h2>Summary:</h2>

- What was developed
- Documentation
- Technologies used
- Execute the project
- My considerations during development

<h5>👉 Click on topics with the right arrow to expand the content</h5>

---

<h2>What was developed 👩‍💻</h2>

<br>

![Minha solução para a Rinha de Frontend](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/3.View.gif)

**JSON Viewer** is a frontend application developed with the following technologies: `React`, `HTML`, `CSS` and `JavaScript`. In the application, you can load a JSON file and view its content directly on the screen. If the JSON file is invalid, the application will display an error message, providing information about the problem.

For JSON files of considerable size, content rendering time may increase. In these cases, the application will display a loading component to indicate that the content is being processed. This ensures a smoother experience for users, even with large files.

An essential feature of this application is the ability to choose between three available languages: _English_, _Spanish_ and _Portuguese_. This allows users to access the application in their preferred language, making it more inclusive.

Additionally, **JSON Viewer** is designed with accessibility features. It is compatible with screen readers, making navigation and understanding easier for users with visual impairments. Furthermore, the application can be easily navigated using the Tab key on the keyboard, ensuring that all elements are accessible from the keyboard. Making the application user-friendly for all users.
<br>

<details><summary>Development 🎯</summary>

The application was carefully developed, with a focus on usability and efficiency. Some of the key features of the development include:

- **React JSON View**: I used the [React JSON View](https://www.npmjs.com/package/react-json-view) library to create an immersive and user-friendly JSON view directly on the screen, making the most efficient viewing experience;

- **Priority Accessibility**: One of the main challenges was ensuring that the application was accessible to everyone. Implemented features such as ARIA labels and alternative descriptions to improve the experience for users with visual impairments and assisted navigation needs;

- **Performance Optimization**: Recognizes the importance of fast rendering, especially when dealing with large files. I implemented optimizations to ensure that content is processed and displayed as quickly as possible, making interaction with the application more agile.

The goal is to deliver a high-quality experience to users, ensuring that accessibility and performance are at the heart of development.

</details>

<details><summary>Accessibility ♿️</summary>

My concern for accessibility is reflected in a series of carefully implemented features to ensure users have the best experience possible:

- **ARIA Labels**: I used aria-label, aria-labelledby and aria-describedby to provide meaningful information and context for elements, making navigation more understandable for screen readers;

- **Alternative Texts**: I implemented alt attributes on images to describe their content, benefiting users who cannot view the images;

- **Keyboard Navigation**: Improved use of the tabindex attribute allows for more efficient page navigation using just the keyboard;

- **Multilingual**: The page can be translated into three languages: Portuguese, English and Spanish, ensuring that users can choose the language they prefer;

- **Feedback for Errors**: I implemented an error message to indicate when an invalid file is sent, helping users understand the problem;

- **Seamless Experience**: A loading icon will be rendered on the screen while the file contents are processed, making the wait clearer and less frustrating for everyone;

- **Improved Interactivity**: I changed the colors of the elements in response to hover and click events, making the experience more dynamic and interactive;

- **Smart Button**: I adopted a logic that disables the button when there is no content on the screen, automatically enabling it when the content is available, improving the overall usability of the page.

</details>

<details><summary>Optimization 🔧</summary>

In order to provide the best experience for users when viewing JSON files on the screen, I adopted an _optimization_ approach. To achieve the shortest possible rendering time, I disabled some features of the React JSON View library:

- **Clipboard Enablement**: The copy to clipboard functionality has been disabled to minimize processing load.

- **Object Size Display**: The page does not display the size of objects, as this may increase rendering time.

- **Data Type Display**: I disabled the data type display, which helps simplify the rendering process.

- **Display of Array Keys**: I also chose not to display the array keys, which contributes to faster loading.

With these optimizations, we were able to achieve the shortest screen rendering time, ensuring that users enjoy a streamlined experience when viewing JSON files in the application.

</details>

<details>
<summary>Styling 🎨</summary>

The visual resources applied to the page are:

- **Sources**:
   - I used Nunito and Roboto fonts in different sizes to improve readability:
       - Select: 18px
       - Title: 36px
       - Description: 20px
       - Texts: 20 or 18px
       - Button: 18px
       - Title: 36px

- **Colors**:
   - I selected colors that provide a pleasant user experience:
       - #efefef
       - #d9d9d9
       - #c3c3c3
       - #333333
       - #000000
       - #818181

- **Cursor Types**:
   - I implemented three types of cursor to provide visual feedback:
       - Standard (default)
       - Pointer
       - Not-allowed

- **Icons**:
   - I integrated icons to improve usability:
       - I used an open folder icon in the file upload field.
       - Added a trash icon to the clear content button.

- **Emojis**:
   - I introduced emojis representing the flags of countries related to the languages available in the application (English, Spanish and Portuguese).
   - In the footer, I added a heart emoji for a friendly touch.

- **Outline Scheme**:
   - Implemented visual outlines to highlight the currently focused element during user navigation.

These styling features have been carefully applied to enhance the aesthetics and usability of the application.

</details>

<p align="right"><a href="#top">Back to the top ☝</a></p>

---

<h2>Documentation 📕</h2>

<br>

**Accessing the Application Step by Step**

I will detail how to access the application, step by step:

- **Choosing the Language**:

The site's first functionality allows you to choose the language displayed, with options in _English_, _Spanish_ and _Portuguese_.
To do this, click on the text corresponding to the desired language (for example, Portuguese) and select your preference. The page will be automatically translated into the chosen language.

See the example below:

![Selecionando o idioma do site](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/2.Language.gif)

- **Viewing a JSON File**:

In the application, you can select a JSON file and view its contents on the screen.
To do this, click on the text Insert JSON file here, which will open the folders on your device.
Just select the JSON file you want to view.

- **Cleaning the Content**:

After viewing the file contents, the Clear Contents button will be activated. By clicking on it, you clear the contents of the screen.

See the example below:

![Visualizando o conteúdo de um arquivo JSON](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/3.View.gif)

- **Invalid JSON File**:

If you select an invalid file, you will receive an error message indicating the problem, as shown below:

![Arquivo JSON inválido](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/4.Error.gif)

- **Large File Upload**:

When you select a large file, a visual component appears on the screen, indicating that the content is being loaded. This allows for a smooth experience while uploading the file, as illustrated below:

![Loading do arquivo JSON](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/5.Loading.gif)

These simple steps ensure efficient navigation in the application, allowing you to make the most of its features.

<p align="right"><a href="#top">Back to the top ☝</a></p>

---

<h2>Technologies used 🛠</h2>

<br>

<img title="React" alt="React" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> <img title="CSS" alt="CSS" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />  <img title="HTML" alt="HTML" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> <img title="JavaScript" alt="JavaScript" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          
<p align="right"><a href="#top">Back to the top ☝</a></p>

---

<h2>Execute the project 💻</h2>

<br>

<details><summary>React Application 🎉</summary>

To clone the project, install the dependencies and start the `React` application, run the commands in the following order:

```bash
  git clone https://github.com/Kecbm/rinha-de-frontend.git
```

```bash
  cd rinha-de-frontend
```

```bash
  npm install
```

```bash
  npm start
```

</details>

<details><summary>Tests 🧪</summary>

To run the project tests, execute the commands in the following order:

```bash
  git clone https://github.com/Kecbm/rinha-de-frontend.git
```

```bash
  cd rinha-de-frontend
```

```bash
  npm install
```

```bash
  npm test
```

![Testes da aplicação](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/6.Testes.png)

</details>

<p align="right"><a href="#top">Back to the top ☝</a></p>

---

<h2>Minhas considerações durante o desenvolvimento 📝</h2>

<br>

<details><summary>ESlint 👔</summary>

During the development process, I encountered a challenge with initializing ESlint in the application, which resulted in the following error:

![Erro na inicialização do ESlint](https://github.com/Kecbm/rinhadefrontend/blob/main/src/assets/1.EsLint.png)

Despite having made several attempts at resolution, I was unsuccessful in resolving this problem 🙁

</details>

<p align="right"><a href="#top">Back to the top ☝</a></p>

---

<h2>Next steps 📝</h2>

Aiming to offer continuous improvement Software, considering the MVP (Minimum Viable Product) development cycle where customer feedback is analyzed with each new delivery and adjustments to existing features or development of new features, below I list a series of steps future tasks to be carried out in the project, which forms a product backlog. Feel free to contribute to this list.

<br>

- [ ] Write more test cases for the application;
- [ ] Development of a customized language select structure;
- [ ] Addition of new accessibility properties;
- [ ] Responsiveness for devices with small and medium screens;
- [ ] Transform the home page into an application page;
- [ ] Add more information to the footer;
- [ ] Develop styling for Not Found page;

<br>

<p align="right"><a href="#top">Back to the top ☝</a></p>

---

<p align="center">Project developed by <a href="https://www.linkedin.com/in/kecbm/" target="_blank" rel="noopener noreferrer">Klecianny Melo</a> 😁</p>
