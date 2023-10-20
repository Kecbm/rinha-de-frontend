import React, { useState } from 'react';
import ReactJson from 'react-json-view'
import translations from './locales/translations';

function App() {
  const [inputJSON, setInputJSON] = useState(null);
  const [inputFileName, setInputFileName] = useState('');
  const [submitJSON, setSubimitJSON] = useState(false);
  const [languageOptionsVisible, setLanguageOptionsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pt');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonContent = JSON.parse(event.target.result);
          setInputJSON(jsonContent);
          setInputFileName(file.name);
        } catch (error) {
          console.error('Erro ao fazer parse do JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleJSONSubmit = () => {
    setSubimitJSON(true);
  };

  const handleClearJSON = () => {
    setSubimitJSON(false);
    setInputJSON(null);

    document.getElementById("fileInput").value = ''; 
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageOptionsVisible(false);
  };

  const toggleLanguageOptions = () => {
    setLanguageOptionsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <h1>{translations[selectedLanguage].titlePage}</h1>

      {/* Botão principal de seleção de idioma */}
      <button onClick={toggleLanguageOptions} aria-label={translations[selectedLanguage].selectLanguage}>{translations[selectedLanguage].language}</button>

      {/* Opções de idioma (exibidas se `languageOptionsVisible` for verdadeiro) */}
      {languageOptionsVisible && (
        <div className="language-options">
          <button onClick={() => handleLanguageChange('en')}>English</button>
          <button onClick={() => handleLanguageChange('pt')}>Português</button>
          <button onClick={() => handleLanguageChange('la')}>Espanhol</button>
          {/* Adicione mais botões para outros idiomas conforme necessário. */}
        </div>
      )}

      <section>
        <label htmlFor="fileInput">{translations[selectedLanguage].inputLabel}</label>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          placeholder={translations[selectedLanguage].inputPlaceholder}
          aria-describedby={translations[selectedLanguage].inputAriaDescribedBy}
          accept=".json"
        />
        <button onClick={handleJSONSubmit} aria-label={translations[selectedLanguage].secondButtonAriaLabel}>{translations[selectedLanguage].sendButton}</button>
        <button onClick={handleClearJSON} aria-label={translations[selectedLanguage].clearButtonAriaLabel}>{translations[selectedLanguage].clearButton}</button>
      </section>
                               
      {
        submitJSON && inputJSON ? (
          <section>
            <ReactJson
              src={inputJSON}
              name={inputFileName}
              indentWidth="2"
              collapsed="true"
              aria-label={`${translations[selectedLanguage].reactJsonAriaLabel} ${inputFileName}`}
              aria-labelledby={translations[selectedLanguage].reactJsonAriaLabellEdby}
            />
          </section>
        ) : null
      }

      <footer>
        <p>✨ {translations[selectedLanguage].frontend} ✨</p>
      </footer>
    </div>
  );
}

export default App;
