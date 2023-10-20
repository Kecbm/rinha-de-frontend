import React, { useState } from 'react';
import ReactJson from 'react-json-view'
import translations from './locales/translations';
import './styles/App.css';

function App() {
  const [inputJSON, setInputJSON] = useState(null);
  const [inputFileName, setInputFileName] = useState('');
  const [submitJSON, setSubimitJSON] = useState(false);
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

    document.getElementById("input-file").value = ''; 
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // const toggleLanguageOptions = () => {
  //   setLanguageOptionsVisible((prevVisible) => !prevVisible);
  // };

  const languageOptions = [
    { value: 'en', label: '🇺🇸 English' },
    { value: 'pt', label: '🇧🇷 Português' },
    { value: 'la', label: '🇪🇸 Espanhol' },
    // Adicione mais opções conforme necessário.
  ];

  return (
    <div id="home-page">
      <h1 id="home-title">{translations[selectedLanguage].titlePage}</h1>

      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        aria-label={translations[selectedLanguage].selectLanguage}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <section>
        <label htmlFor="input-file" id="input-label">{translations[selectedLanguage].inputLabel}</label>

        {/* OBS: O input não está puxando a tradução nem a estilização :( */}
        {translations[selectedLanguage].inputAriaDescribedBy}
        <input
          id="input-file"
          type="file"
          onChange={handleFileChange}
          // placeholder={translations[selectedLanguage].inputPlaceholder}
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
